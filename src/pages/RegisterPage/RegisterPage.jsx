import { signOut, sendEmailVerification, updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash, FaUserAlt, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import { useContext, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import registersvg from '../../assets/sign-up-form.svg';

const RegisterPage = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        photoUrl: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        setErrorMessage('');

        // Password validation regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordRegex.test(formData.password)) {
            setErrorMessage('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter');
            return;
        }

        createUser(formData.email, formData.password)
            .then(userCredential => {
                updateProfile(auth.currentUser, {
                    displayName: formData.username,
                    photoURL: formData.photoUrl
                }).catch(error => {
                    toast.error('Error updating user profile:', error.code, error.message);
                });

                signOut(auth).catch(error => {
                    toast.error('Error logging out:', error.code, error.message);
                });

                setSuccess(true);
                toast.success('User registered successfully!');
                setFormData({ username: '', photoUrl: '', email: '', password: '' });
                e.target.reset();
                navigate("/login");
            })
            .catch(error => {
                setErrorMessage(error.message);
                setSuccess(false);
                toast.error('Error registering user!');
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
      <div className="flex items-center justify-center min-h-screen">
            <Helmet>
                <title>CrowdHex | Register</title>
            </Helmet>
            <div className="w-full max-w-4xl flex rounded-lg shadow-lg bg-white dark:bg-gray-800">
                {/* Left section (form) */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">Create an Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username */}
                        <div className="flex items-center border-b-2">
                            <FaUserAlt className="text-gray-500 dark:text-gray-200 mr-3" />
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                placeholder="Enter a username"
                                className="w-full px-4 py-2 mt-1 text-sm border-none focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>

                        {/* Avatar URL */}
                        <div className="flex items-center border-b-2">
                            <FaImage className="text-gray-500 dark:text-gray-200 mr-3" />
                            <input
                                type="text"
                                name="photoUrl"
                                value={formData.photoUrl}
                                onChange={handleChange}
                                required
                                placeholder="Enter a photo URL"
                                className="w-full px-4 py-2 mt-1 text-sm border-none focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center border-b-2">
                            <FaEnvelope className="text-gray-500 dark:text-gray-200 mr-3" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter a valid e-mail"
                                className="w-full px-4 py-2 mt-1 text-sm border-none focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative flex items-center border-b-2">
                            <FaLock className="text-gray-500 dark:text-gray-200 mr-3" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter a strong password"
                                className="w-full px-4 py-2 mt-1 text-sm border-none focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-4 flex items-center text-gray-600 dark:text-gray-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                            <FaUserAlt /> Register
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-600 dark:text-gray-200 mt-2">
                        Already have an account?{" "}
                        <span onClick={() => navigate("/login")} className="text-blue-500 hover:underline cursor-pointer">Log in</span>
                    </p>

                    {errorMessage && <p className="text-sm text-red-500 dark:text-red-400">{errorMessage}</p>}
                    {success && <p className="text-sm text-green-500 dark:text-green-400">User registered successfully!</p>}
                </div>

                {/* Right section (image) */}
                <div className="w-1/2 hidden md:block" >
                    <img src={registersvg} alt="Register" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
