import CampaignCard from "../CampaignCard/CampaignCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useCampaign from "../../providers/useCampaign";


const RunningCampaigns = () => {

    const [campaigns, loading, error] = useCampaign("running");
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-10 md:py-16 max-w-7xl mx-auto px-4">
                <SectionTitle title="Running Campaigns" subtitle="Explore and support the active campaigns." />
                <div className="flex justify-center items-center" >
                    <CampaignCard campaigns={campaigns} />
                </div>
                <div className="flex justify-center items-center my-6">
                    <Link to="/campaigns" className=" text-center text-white text-lg rounded px-6 py-2 bg-teal-600 dark:text-teal-400 font-semibold mt-4 hover:underline">See More</Link>
                </div>
            </div>
        </section>
    );
};

export default RunningCampaigns;
