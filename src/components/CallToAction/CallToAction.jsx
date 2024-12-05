import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
