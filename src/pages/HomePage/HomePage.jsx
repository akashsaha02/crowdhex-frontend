import { Link } from "react-router-dom";
import HeroSection from './../../components/HeroSection/HeroSection';
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CallToAction from "../../components/CallToAction/CallToAction";
import RunningCampaigns from "../../components/RunningCampaigns/RunningCampaigns";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Running Campaigns Section */}
      <RunningCampaigns  />
      {/* How It Works Section */}
      <HowItWorks />
      {/* Call-to-Action Section */}
      <CallToAction />
    </div>
  );
};

export default HomePage;
