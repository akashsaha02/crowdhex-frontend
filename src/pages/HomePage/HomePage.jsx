import HowItWorks from "../../components/HowItWorks/HowItWorks";
import RunningCampaigns from "../../components/RunningCampaigns/RunningCampaigns";
import Banner from "../../components/Banner/Banner";
import OurMission from "../../components/OurMission/OurMission";
import NewsletterFAQ from "../../components/NewsletterFAQ/NewsletterFAQ";
import CarouselComp from "../../components/CarouselComp/CarouselComp";

const HomePage = () => {

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900">
      {/* <Banner /> */}
      <CarouselComp />
      <RunningCampaigns />
      <HowItWorks />
      <OurMission />
      <NewsletterFAQ />
    </div>
  );
};

export default HomePage;
