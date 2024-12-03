import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const MyProfilePage = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logoutUser();
            toast.success('Logged out successfully!');
            navigate('/');

        } catch (error) {
            toast.error('Error logging out!', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8">
            <Helmet>
                <title>WinterSoul | Dashboard</title>
            </Helmet>
            {/* Banner Section */}
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
                            onClick={() => navigate("/update-profile")}
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
        </div>
    )
}

export default MyProfilePage