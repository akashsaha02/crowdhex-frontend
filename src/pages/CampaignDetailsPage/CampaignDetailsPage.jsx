import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CampaignDetailsPage = () => {

  const { user } = useContext(AuthContext);
  const p = useParams();
  const [campaignDetails, setCampaignDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/campaigns/${p.id}`)
      .then((response) => {
        setCampaignDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [p.id]);

  const handleDonate = async () => {
    if (!user) {
      Swal.fire("Error", "You must be logged in to donate.", "error");
      return;
    }

    if (!donationAmount || parseFloat(donationAmount) < campaignDetails.minDonation) {
      Swal.fire(
        "Invalid Amount",
        `Please enter an amount greater than or equal to $${campaignDetails.minDonation}.`,
        "warning"
      );
      return;
    }

    try {
      const donationData = {
        campaignId: p.id,
        campaignTitle: campaignDetails.title,
        userEmail: user.email,
        userName: user.displayName,
        donationAmount: parseFloat(donationAmount),
        donationDate: new Date().toISOString(),
      };

      const response = await axios.post("http://localhost:3000/donations", donationData);

      if (response.status === 200) {
        setIsModalOpen(false);
        Swal.fire("Thank you!", "Your donation has been recorded successfully!", "success");
      } else {
        throw new Error("Failed to record donation.");
      }
    } catch (error) {
      console.error("Error processing donation: ", error);
      Swal.fire("Error", "An error occurred while processing your donation.", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Campaign Details</h1>
      {campaignDetails ? (
        <div>
          {/* Campaign Details */}
          <img
            src={campaignDetails.image}
            alt={campaignDetails.title}
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold">{campaignDetails.title}</h2>
          <p className="text-gray-700 mt-2">{campaignDetails.description}</p>
          <p className="text-gray-500 mt-2">
            Created by: <strong>{campaignDetails.userName}</strong>
          </p>
          <p className="text-gray-500">
            Email: <strong>{campaignDetails.userEmail}</strong>
          </p>
          <p className="text-gray-500 mt-2">
            Minimum Donation: <strong>${campaignDetails.minDonation}</strong>
          </p>
          <p className="text-gray-500">
            Deadline: <strong>{new Date(campaignDetails.deadline).toLocaleDateString()}</strong>
          </p>

          {/* Donate Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 focus:outline-none"
          >
            Donate
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Make a Donation</h3>
            <p className="py-2">
              Enter the amount you wish to donate (Minimum: ${campaignDetails.minDonation}):
            </p>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="input input-bordered w-full"
              placeholder={`Minimum: $${campaignDetails.minDonation}`}
            />
            <div className="modal-action">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleDonate}
                className="btn btn-primary"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetailsPage;
