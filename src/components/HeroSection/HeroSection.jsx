import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-blue-50 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Make a Difference This Winter
      </h1>
      <p className="mt-4 text-gray-600">
        Join us in providing warmth to those in need. Donate winter clothing and spread kindness.
      </p>
      <Link
        to="/campaigns"
        className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"
      >
        Start Donating
      </Link>
    </div>
  );
};

export default HeroSection;
