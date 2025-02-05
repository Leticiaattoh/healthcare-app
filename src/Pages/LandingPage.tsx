import Download from "../components/Download";
import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";
import Providers from "../components/Providers";
import ServiceInfo from "../components/ServiceInfo";
import TestimonialCarousel from "../components/TestimonialCarousel";


const LandingPage: React.FC = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <OurServices />
        <ServiceInfo />
        <LearnMore />
        <Providers />
        <Download />
        <TestimonialCarousel/>
      </div>
    );
};

export default LandingPage;