import HowItWorks from "../../components/HowItWorks/HowItWorks";
import RunningCampaigns from "../../components/RunningCampaigns/RunningCampaigns";
import Banner from "../../components/Banner/Banner";
import OurMission from "../../components/OurMission/OurMission";
import NewsletterFAQ from "../../components/NewsletterFAQ/NewsletterFAQ";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import { Helmet } from 'react-helmet';
import Categories from "../../components/Categories/Categories";
import Testimonial from "../../components/Testimoneal/Testimoneal";


const HomePage = () => {

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900">
      <Helmet>
        <title>CrowdHex | Home</title>
      </Helmet>
      {/* <Banner /> */}
      <CarouselComp />
      <Categories/>
      <RunningCampaigns />
      <HowItWorks />
      <OurMission />
      <Testimonial/>
      <NewsletterFAQ />
    </div>
  );
};

export default HomePage;
