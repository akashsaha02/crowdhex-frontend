import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle, FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import loginsvg from '../../assets/authentication.svg';

const LoginPage = () => {
    const { user, loginUser, googleSignIn, logoutUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(formData.email, formData.password);
            setFormData({ email: '', password: '' }); // Reset form data
            emailRef.current.value = '';
            passwordRef.current.value = '';
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging in!', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            toast.success('Logged in successfully with Google!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging in with Google!', error);
        }
    };

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Helmet>
                <title>CrowdHex | Login</title>
            </Helmet>
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg flex overflow-hidden">
                <div className="w-full md:w-1/2 p-8 space-y-6">
                    {user ? (
                        <div className="text-center">
                            <div className="p-4 text-green-600 bg-green-100 rounded-md flex flex-col justify-center items-center gap-2">
                                <img src={user.photoURL} alt="Avatar" className="w-20 h-20 object-cover rounded-full border-2 border-red-500" />
                                <p className="text-gray-800 dark:text-white">Logged in successfully! {user.displayName || user.email}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-2 mt-3 md:mt-5 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-4">Login to Your Account</h2>
                            <hr className='my-4 border-gray-300 dark:border-gray-600'></hr>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4">
                                    <FaEnvelope className="text-gray-400 dark:text-gray-500 mr-2" />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        ref={emailRef}
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4">
                                    <FaLock className="text-gray-400 dark:text-gray-500 mr-2" />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        ref={passwordRef}
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        required
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center items-center px-4 py-2 text-white bg-teal-500 font-semibold rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                >
                                    <FaSignInAlt className="mr-2" />
                                    Login
                                </button>

                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-full flex justify-center items-center gap-2 px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <FaGoogle className="text-white" />
                                    Login with Google
                                </button>

                                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                                <p className="text-sm text-center text-gray-600 dark:text-gray-200">
                                    Forgot your password?{' '}
                                    <span
                                        onClick={() =>
                                            navigate('/reset-password', { state: { email: formData.email } })
                                        }
                                        className="text-blue-500 hover:underline cursor-pointer"
                                    >
                                        Reset it here
                                    </span>
                                </p>

                                <p className="text-sm text-center text-gray-600 dark:text-gray-200">
                                    Don&apos;t have an account?{' '}
                                    <span onClick={() => navigate("/register")} className="text-blue-500 hover:underline">
                                        Register here
                                    </span>
                                </p>
                            </form>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex justify-center items-center w-1/2">
                    <img src={loginsvg} alt="" className='max-w-sm'/>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
