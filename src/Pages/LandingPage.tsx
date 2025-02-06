import Background1 from "../components/Background1";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import LearnMore from "../components/LearnMore";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";
import Providers from "../components/Providers";
import ServiceInfo from "../components/ServiceInfo";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ViewAll from "../components/ViewAll";


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
        <TestimonialCarousel />
        <Background1/>
        <LatestArticles />
        <ViewAll />
        <Footer/>
      </div>
    );
};

export default LandingPage;