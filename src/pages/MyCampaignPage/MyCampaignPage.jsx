import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MyCampaignPage = () => {

  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  const email = user.email;


  useEffect(() => {
    axios.get(`http://localhost:3000/campaigns`)
      .then(response => {
        const receivedData = response.data.filter(item => item.userEmail === email);
        setCampaigns(receivedData)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [email]);

  // console.log(campaigns)


  return (
    <div>
      {/* Running Campaigns Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          My Campaigns
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explore and support the active campaigns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Replace with dynamic campaign data */}
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">
                {campaign.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {campaign.description}
              </p>
              <Link
                to={`/campaigns/${campaign._id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </Link>

              <div className="">
                <Link>
                  update
                </Link>
                <button type="" className="">
                  delete
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>


    </div>
  )
}

export default MyCampaignPage
