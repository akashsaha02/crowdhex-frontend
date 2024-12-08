import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/logo-removebg-preview.png";
import banner2 from "../../assets/logo-removebg-preview.png";
import banner3 from "../../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  const banners = [
    { src: banner1, alt: "Explore the Mountains", caption: "Explore the Mountains" },
    { src: banner2, alt: "Discover the Beaches", caption: "Discover the Beaches" },
    { src: banner3, alt: "Experience the City Lights", caption: "Experience the City Lights" },
  ];

  return (
    <div className="my-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={true}
        showStatus={true}
        emulateTouch
        swipeable
        interval={3000}
        stopOnHover
        dynamicHeight={false}
        className="max-w-7xl mx-auto rounded-lg "
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

              <div className="px-4">
                <div className="text-left max-w-2xl">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Empower Dreams with <span className="text-teal-400">CrowdHex</span>
                  </h1>
                  <p className="mt-6 text-justify text-lg text-gray-600 dark:text-gray-300">
                    Join hands to fund the projects that inspire you. Whether it's a startup idea,
                    a personal need, or a community project, we connect dreamers with supporters
                    to make a difference.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
                    <Link to={'/add-campaign'} className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white text-lg font-medium rounded-lg shadow-lg transition-all">
                      Start a Campaign
                    </Link>
                    <Link to={'/campaigns'} className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium rounded-lg shadow-lg transition-all">
                      Explore Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="object-cover w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
