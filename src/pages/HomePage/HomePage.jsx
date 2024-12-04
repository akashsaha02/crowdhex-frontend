import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Make a Difference This Winter
        </h1>
        <p className="mt-4 text-gray-600">
          Join us in providing warmth to those in need. Donate winter clothing and spread kindness.
        </p>
        <Link
          to="/donate"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"
        >
          Start Donating
        </Link>
      </div>

      {/* Running Campaigns Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Ongoing Campaigns
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Explore and support the active campaigns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Replace with dynamic campaign data */}
          {[1, 2, 3].map((campaign) => (
            <div
              key={campaign}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/300?text=Campaign+${campaign}`}
                alt={`Campaign ${campaign}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">
                Campaign {campaign}
              </h3>
              <p className="text-gray-600 mt-2">
                Brief description of the campaign goes here.
              </p>
              <Link
                to={`/campaign/${campaign}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold mt-4">Create a Campaign</h3>
            <p className="text-gray-600 mt-2">
              Start your donation drive by creating a campaign.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold mt-4">Receive Donations</h3>
            <p className="text-gray-600 mt-2">
              Let people contribute to your cause effortlessly.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold mt-4">Make an Impact</h3>
            <p className="text-gray-600 mt-2">
              Deliver the donations and share the joy.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Ready to Help?</h2>
        <p className="mt-4">
          Your contributions can make this winter a little warmer for those in need.
        </p>
        <Link
          to="/donate"
          className="mt-6 inline-block bg-white text-blue-600 py-3 px-6 rounded-full hover:bg-gray-100"
        >
          Start Donating Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
