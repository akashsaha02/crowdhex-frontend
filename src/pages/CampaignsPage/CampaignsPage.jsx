import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns"; // To format the date

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch campaigns from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/campaigns")
      .then((response) => {
        setCampaigns(response.data);
        setSortedCampaigns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Sort campaigns based on minimum donation
  const handleSort = () => {
    const sorted = [...campaigns].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });
    setSortedCampaigns(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle the sort order
  };

  // Check if the campaign is still running
  const checkIfRunning = (deadline) => {
    const now = new Date();
    const campaignDeadline = new Date(deadline);
    return now < campaignDeadline; // If current date is before the deadline, it's still running
  };

  return (
    <div>
      {/* Sorting Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSort}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Running Campaigns Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Ongoing Campaigns</h2>
        <p className="text-center text-gray-600 mt-2">Explore and support the active campaigns.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Dynamic Campaign Data */}
          {sortedCampaigns.map((campaign) => {
            const isRunning = checkIfRunning(campaign.deadline);
            return (
              <div
                key={campaign.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform "
              >
                {/* Campaign Status */}


                {/* Campaign Image */}
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />

                  <div
                    className={`px-3 py-1 text-sm backdrop:via-blue-950 font-bold text-center rounded-lg absolute top-4 right-4 
    shadow-lg ${isRunning
                        ? "bg-purple-700 text-white shadow-black/80 animate-pulse"
                        : "bg-gray-800 text-gray-50 shadow-black/60"
                      }`}
                  >
                    {isRunning ? "Running" : "Ended"}
                  </div>
                </div>

                <div className="p-6">
                  {/* Campaign Title */}
                  <h3 className="text-xl font-semibold text-gray-800">{campaign.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{campaign.description}</p>

                  {/* Additional Campaign Details */}
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600 capitalize">
                      <span className="font-medium">Category:</span> {campaign.type}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Minimum Donation:</span> ${campaign.minDonation}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Deadline:</span>{" "}
                      {formatDistanceToNow(new Date(campaign.deadline), { addSuffix: true })}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    to={`/campaigns/${campaign._id}`}
                    className="mt-4 inline-block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CampaignsPage;
