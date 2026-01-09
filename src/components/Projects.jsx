import ProjectCard from "./ProjectCard";
import { easeInOut, motion } from "motion/react";

const Project = () => {
  return (
    <motion.div 
      className="px-4 py-8 md:py-12 md:px-8 lg:px-16">
      <motion.div 
        initial={{
        y: 10,
        opacity: 0
      }}

      animate={{
        y:0,
        opacity: 1
      }}

      transition={{
        duration: 0.5,
        transform: easeInOut
      }}
      className="font-inter tracking-tight font-medium flex justify-between items-center">
        <h1 className="text-3xl">Featured Projects</h1>
        <p className="text-xl text-[#696969]">25' to Present</p>
      </motion.div>
      <div className="mt-4">
        <ProjectCard />
      </div>
    </motion.div>
  );
};

export default Project;
