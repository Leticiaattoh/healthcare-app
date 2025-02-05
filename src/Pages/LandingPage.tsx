import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";


const LandingPage: React.FC = () => {
    return <div>
        <Navbar />
      <Hero />
      <OurServices/>
  </div>
};

export default LandingPage;