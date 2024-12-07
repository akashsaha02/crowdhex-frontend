import { useContext, useEffect, useMemo, useState,useCallback } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import CampaignTable from "../../components/MyCampaignTable/MyCampaignTable";
import CampaignActions from "../../components/MyCampaignActions/MyCampaignActions";

const MyCampaignPage = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get("http://localhost:3000/campaigns")
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

  const handleDelete = useCallback((id) => {
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
  }, []);

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
          <CampaignActions id={value} handleDelete={handleDelete} />
        ),
      },
    ],
    [handleDelete]
  );

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
          <CampaignTable campaigns={campaigns} columns={columns} />
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
