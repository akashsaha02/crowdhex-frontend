import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CampaignCard from "../CampaignCard/CampaignCard";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const RunningCampaigns = () => { // Default limit to 6
    const [campaigns, setCampaigns] = useState([]);


    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/running`);
                setCampaigns(response.data);
            } catch (error) {
                console.error("Error fetching campaigns:", error);
            }
        };

        fetchCampaigns();
    }, []);

    return (
        <section className="py-16 px-6 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
                Running Campaigns
            </h2>
            <p className="text-center text-gray-600 mt-2">
                Explore and support the active campaigns.
            </p>
            <div >
                <CampaignCard campaigns={campaigns} />
            </div>


        </section>
    );
};

export default RunningCampaigns;
