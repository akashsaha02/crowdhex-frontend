import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { AiOutlineDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";


const CampaignCard = ({ campaigns }) => {
    const checkIfRunning = (deadline) => {
        const now = new Date();
        const campaignDeadline = new Date(deadline);
        return now < campaignDeadline;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center items-center">
            {campaigns.map((campaign) => {
                const isRunning = checkIfRunning(campaign.deadline);
                return (
                    <div
                        key={campaign._id}
                        className="relative group max-w-md rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-gray-100"
                    >
                        {/* Image Section */}
                        <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-64 md:h-72 object-cover group-hover:brightness-50 transition-all duration-300"
                        />

                        {/* Campaign Status Badge */}
                        <div
                            className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold uppercase rounded-lg shadow-lg ${isRunning
                                ? "bg-green-600 text-white animate-pulse"
                                : "bg-red-600 text-white"
                                }`}
                        >
                            {isRunning ? "Running" : "Ended"}
                        </div>

                        {/* Details Section */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-2xl font-bold text-white shadow-md line-clamp-2">{campaign.title}</h3>
                            <p className="text-white text-sm mt-2 line-clamp-1">{campaign.description}</p>

                            {/* Additional Info */}
                            <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-300">
                                <p className="flex items-center gap-2 capitalize font-bold text-white">
                                    <BiCategory className="text-teal-400 text-lg" />
                                    {campaign.type}
                                </p>
                                {/* <p className="flex items-center gap-2 font-bold text-white">
                                    <AiOutlineDollarCircle className="text-yellow-400 text-lg" />
                                    ${campaign.minDonation} Min
                                </p> */}
                                <p className="flex items-center gap-2 font-bold text-white">
                                    <AiOutlineCalendar className="text-blue-400 text-lg" />
                                    {formatDistanceToNow(new Date(campaign.deadline), { addSuffix: true })}
                                </p>
                            </div>

                            {/* Learn More Button */}
                            <Link
                                to={`/campaigns/${campaign._id}`}
                                className="mt-6 w-full inline-block text-center bg-teal-600 text-white font-bold py-2 rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:translate-y-1"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>


                );
            })}
        </div>
    );
};

export default CampaignCard;
