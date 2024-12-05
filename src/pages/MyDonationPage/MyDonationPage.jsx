import { useContext, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

const MyDonationPage = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/donations`)
      .then((response) => {
        const receivedData = response.data.filter(
          (item) => item.userEmail === email
        );
        setDonations(receivedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [email]);

  // Define table columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "campaignTitle",
        header: "Campaign Title",
      },
      {
        accessorKey: "donationAmount",
        header: "Donation Amount",
        cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
      },
      {
        accessorKey: "donationDate",
        header: "Donation Date",
        cell: ({ getValue }) =>
          new Date(getValue()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
      },
      {
        accessorKey: "userEmail",
        header: "Email",
      },
      {
        accessorKey: "userName",
        header: "Donor Name",
      },
    ],
    []
  );

  const table = useReactTable({
    data: donations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          My Donations
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          A record of all the campaigns you have contributed to.
        </p>

        {donations.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="border border-gray-200 px-4 py-2 text-left text-gray-700 font-semibold"
                      >
                        {header.isPlaceholder
                          ? null
                          : header.column.columnDef.header}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="border border-gray-200 px-4 py-2 text-gray-700"
                      >
                        {cell.column.columnDef.cell
                          ? cell.column.columnDef.cell(cell)
                          : cell.getValue()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            You haven't made any donations yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyDonationPage;
