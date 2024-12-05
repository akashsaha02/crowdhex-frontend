import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RunningCampaigns = () => { // Default limit to 6
    const [campaigns, setCampaigns] = useState([]);


    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('http://localhost:3000/running');
                setCampaigns(response.data);
            } catch (error) {
                console.error("Error fetching campaigns:", error);
            }
        };

        fetchCampaigns();
    }, []);

    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
                Ongoing Campaigns
            </h2>
            <p className="text-center text-gray-600 mt-2">
                Explore and support the active campaigns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign._id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{campaign.title}</h3>
                        <p className="text-gray-600 mt-2 line-clamp-1">
                            {campaign.description}
                        </p>
                        <Link
                            to={`/campaign/${campaign._id}`}
                            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            See More
                        </Link>
                    </div>
                ))}
            </div>
         

        </section>
    );
};

export default RunningCampaigns;
