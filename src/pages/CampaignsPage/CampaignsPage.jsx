import { useEffect, useState } from "react";
import SortButton from "../../components/SortButton/SortButton";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from 'react-helmet';
import SearchCampaign from "../../components/SearchCampaign/SearchCampaign";
import useCampaign from "../../providers/useCampaign";

const CampaignsPage = () => {
  const [campaigns, , loading] = useCampaign("campaigns");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("default");
  const [activeTab, setActiveTab] = useState("All");

  const today = new Date();

  // Filter campaigns when data or active tab changes
  useEffect(() => {
    if (campaigns.length) {
      let filtered = [...campaigns];
      if (activeTab === "Ongoing") {
        filtered = campaigns.filter((campaign) => new Date(campaign.deadline) >= today);
      } else if (activeTab === "Completed") {
        filtered = campaigns.filter((campaign) => new Date(campaign.deadline) < today);
      }
      setFilteredCampaigns(filtered);
      setSortedCampaigns(filtered); // Initialize sorted campaigns
    }
  }, [campaigns, activeTab]);

  // Handle sorting
  const handleSort = (criteria) => {
    let sorted = [...filteredCampaigns];
    switch (criteria) {
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        break;
      case "asc":
        sorted.sort((a, b) => a.minDonation - b.minDonation);
        break;
      case "desc":
        sorted.sort((a, b) => b.minDonation - a.minDonation);
        break;
      default:
        sorted = filteredCampaigns;
    }
    setSortedCampaigns(sorted);
  };

  // Debugging logs
  useEffect(() => {
    console.log("Campaigns:", campaigns);
    console.log("Filtered Campaigns:", filteredCampaigns);
    console.log("Active Tab:", activeTab);
  }, [campaigns, filteredCampaigns, activeTab]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
  }

  return (
    <div className="pt-10 pb-16 px-4 max-w-7xl mx-auto">
      <Helmet>
        <title>CrowdHex | All Campaigns</title>
      </Helmet>
      <div>
        <SectionTitle title="All Campaigns" subtitle="Explore and support the active campaigns." />
        <div className="flex max-w-5xl mx-auto flex-col md:flex-row items-center justify-between gap-3 mt-4">
          {/* Tabs */}
          <div className="flex space-x-4">
            {["All", "Ongoing", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded ${
                  activeTab === tab ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <SearchCampaign campaigns={filteredCampaigns} setSortedCampaigns={setSortedCampaigns} />
          <SortButton handleSort={handleSort} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
        </div>
        <CampaignCard campaigns={sortedCampaigns} />
      </div>
    </div>
  );
};

export default CampaignsPage;
