import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { Link } from 'react-router-dom'
import axios from 'axios'
const MyDonationPage = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  const email = user.email;

  useEffect(() => {
    axios.get(`http://localhost:3000/donations`)
      .then(response => {
        const receivedData = response.data.filter(item => item.userEmail === email);
        setDonations(receivedData)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [email]);

  return (
    <div>
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          My Donations
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explore and support the active donations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={donation.image}
                alt={donation.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">
                {donation.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {donation.description}
              </p>
              <Link
                to={`/donations/${donation._id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default MyDonationPage
