import { useEffect, useState } from "react";
import axios from "axios";
import SortButton from "../../components/SortButton/SortButton";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/campaigns`)
      .then((response) => {
        setCampaigns(response.data);
        setSortedCampaigns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSort = () => {
    const sorted = [...campaigns].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });
    setSortedCampaigns(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Ongoing Campaigns</h2>
      <p className="text-center text-gray-600 mt-2">Explore and support the active campaigns.</p>
      <SortButton handleSort={handleSort} sortOrder={sortOrder} />
      <CampaignCard campaigns={sortedCampaigns} />
    </div>
  );
};

export default CampaignsPage;

