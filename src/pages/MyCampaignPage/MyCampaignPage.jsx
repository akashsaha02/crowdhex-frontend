import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useTable } from "react-table";

const MyCampaignPage = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/campaigns`)
      .then((response) => {
        const receivedData = response.data.filter(
          (item) => item.userEmail === email
        );
        setCampaigns(receivedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/campaigns/${id}`)
          .then(() => {
            setCampaigns((prevCampaigns) =>
              prevCampaigns.filter((campaign) => campaign._id !== id)
            );
            Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting campaign: ", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the campaign.",
              "error"
            );
          });
      }
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <div className="flex justify-center items-center">
            <img
              src={value}
              alt="Campaign"
              className="w-20 h-20 object-cover rounded-md border border-gray-300"
            />
          </div>
        ),
      },
      {
        Header: "Campaign Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: ({ value }) => <span className="line-clamp-1 ">{value}</span>,
      },
      {
        Header: "Minimum Donation",
        accessor: "minDonation",
        Cell: ({ value }) => <span className="line-clamp-1 ">${value}</span>,
      },
      {
        Header: "Deadline",
        accessor: "deadline",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Actions",
        accessor: "_id",
        Cell: ({ value }) => (
          <div className="flex justify-center items-center gap-2">
            <Link
              to={`/campaigns/update/${value}`}
              className="text-sm bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition"
            >
              Update
            </Link>
            <button
              type="button"
              className="text-sm bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
              onClick={() => handleDelete(value)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data: campaigns,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          My Campaigns
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Manage your active campaigns below.
        </p>

        {campaigns.length > 0 ? (
          <div className="overflow-x-auto shadow">
            <table
              {...getTableProps()}
              className="min-w-full bg-white border border-gray-500 rounded-lg "
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        key={column.id}
                        className="px-4 py-3 text-gray-600 uppercase tracking-wider border text-center bg-indigo-50"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={row.id}
                      className="hover:bg-gray-50 text-center"
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          key={cell.id}
                          className="px-4 py-4 border text-sm text-gray-700"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            You haven't created any campaigns yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCampaignPage;
