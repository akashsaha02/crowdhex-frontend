import { useContext, useState } from "react";
import { toast } from "react-hot-toast"; // For toast notifications
import { useNavigate } from "react-router-dom";
import { AuthContext } from './../../providers/AuthProvider';
import axios from 'axios';

const AddCampaignPage = () => {
  const { user } = useContext(AuthContext);

  console.log(user)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Backend integration: Send data to your API or database
    try {
      const response = await axios.post("http://localhost:3000/campaigns", {
        ...formData,
        userEmail: user.email,
        userName: user.displayName,
      }, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        toast.success("Campaign added successfully!");
        navigate("/campaigns"); // Redirect to the campaigns list page
      } else {
        throw new Error("Failed to add campaign.");
      }
    } catch (error) {
      toast.error("Error adding campaign:", error.message);
      toast.error("Something went wrong. Please try again.");
    }
    // console.log(formData);
  };


  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 text-center">
        Add New Campaign
      </h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter image URL"
          />
        </div>

        {/* Campaign Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter campaign title"
          />
        </div>

        {/* Campaign Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter campaign description"
          />
        </div>

        {/* Minimum Donation Amount */}
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter minimum donation amount"
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block text-gray-700">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* User Email (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        {/* User Name (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Add Campaign
        </button>
      </form>
    </div>
  );
};

export default AddCampaignPage;
