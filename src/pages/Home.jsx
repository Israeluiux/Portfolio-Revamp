import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import Project from "../components/Projects";
import ReachOut from "../components/ReachOut";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Tech />
      <Project />
      <AboutMe />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default Home;
