import { useEffect, useState } from "react";
import axios from "axios";
import CampaignCard from "../CampaignCard/CampaignCard";
import SectionTitle from "../SectionTitle/SectionTitle";

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
            <SectionTitle title="Running Campaigns" subtitle="Explore and support the active campaigns." />
            <div >
                <CampaignCard campaigns={campaigns} />
            </div>


        </section>
    );
};

export default RunningCampaigns;
