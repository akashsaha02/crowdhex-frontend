import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const CampaignCard = ({ campaigns }) => {
    const checkIfRunning = (deadline) => {
        const now = new Date();
        const campaignDeadline = new Date(deadline);
        return now < campaignDeadline;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {campaigns.map((campaign) => {
                const isRunning = checkIfRunning(campaign.deadline);
                return (
                    <div
                        key={campaign._id}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform"
                    >
                        <div className="relative">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-48 object-cover"
                            />
                            <div
                                className={`px-3 py-1 text-sm font-bold text-center rounded-lg absolute top-4 right-4 shadow-lg ${isRunning
                                        ? "bg-purple-700 text-white shadow-black/80 animate-pulse"
                                        : "bg-gray-800 text-gray-50 shadow-black/60"
                                    }`}
                            >
                                {isRunning ? "Running" : "Ended"}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                {campaign.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                                {campaign.description}
                            </p>

                            <div className="mt-4 space-y-2">
                                <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                                    <span className="font-medium">Category:</span> {campaign.type}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-medium">Minimum Donation:</span> ${campaign.minDonation}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-medium">Deadline:</span>{" "}
                                    {formatDistanceToNow(new Date(campaign.deadline), { addSuffix: true })}
                                </p>
                            </div>

                            <Link
                                to={`/campaigns/${campaign._id}`}
                                className="mt-4 inline-block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
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
