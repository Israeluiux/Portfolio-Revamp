import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import Project from "../components/Projects";
import ReachOut from "../components/ReachOut";

const Home = () => {
  return (
    <>
      <Hero />
      <Tech />
      <Project />
      <ReachOut />
    </>
  );
};

export default Home;
