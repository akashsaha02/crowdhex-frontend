import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const MyProfilePage = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            toast.success("Logged out successfully!");
            navigate("/");
        } catch {
            toast.error("Error logging out!");
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (!user) {
            toast.error("User not authenticated.");
            return;
        }

        try {
            await updateProfile(user, {
                displayName: displayName.trim(),
                photoURL: photoURL.trim(),
            });
            toast.success("Profile updated successfully!");
            setIsModalOpen(false);
        } catch {
            toast.error("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8">
            <Helmet>
                <title>CrowdHex | Dashboard</title>
            </Helmet>
            {/* Profile Section */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="">
                    <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="flex justify-center -mt-16">
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/150"}
                            alt="User Avatar"
                            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
                <div className="text-center py-8">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Welcome back, {user?.displayName || "User Name"}
                    </h1>
                    <p className="text-gray-500">Email: {user?.email || "user@example.com"}</p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Edit Profile
                        </button>
                        <button
                            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Update Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4 text-center">Update Profile</h2>
                        <form onSubmit={handleUpdateProfile}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Display Name"
                                    value={user.displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    value={user.photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-full py-2 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfilePage;
