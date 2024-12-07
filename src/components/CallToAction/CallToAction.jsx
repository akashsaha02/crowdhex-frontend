import { Link } from "react-router-dom";
import img from "../../assets/footerLogo.png";

const CallToAction = () => {
  return (
    <section
      className="py-16 px-6 bg-teal-600 dark:bg-gray-900 text-white text-center bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-teal-600/70 dark:bg-gray-900/70 p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready to Help?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-200 dark:text-gray-400">
          Your contributions can make this winter a little warmer for those in need.
        </p>
        <Link
          to="/donate"
          className="mt-6 inline-block bg-white font-bold text-teal-600 dark:text-gray-800 dark:bg-gray-100 py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
        >
          Start Donating Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
