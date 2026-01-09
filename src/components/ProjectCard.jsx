import { Project } from "../libs/project";
import Israel from "../assets/Israel.jpeg"
import { easeInOut, motion } from "motion/react";

const ProjectCard = () => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Project.map(({ id, title, year, type }) => (
        <motion.div 
          
      initial={{
        y: 30,
        opacity: 0,
        filter: "blur(2px)",              
      }}

      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)"
      }}

      transition={{
        duration: 0.8,
        transform: easeInOut
      }}

      viewport={{
        once: true
      }}

            key={id} className="flex flex-col gap-2">
          <div className="h-80 bg-black hover:rounded-2xl">
            <img src={Israel} className="w-full h-full object-cover rounded-[10px]" alt="Balogun Israel Oluwatosin" />
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-xl font-inter tracking-tight hover:underline cursor-pointer">
              {title}
            </h1>
            <div className="text-end">
              <h3 className="font-inter tracking-tight text-[#696969]">
                {year}
              </h3>
            </div>
          </div>
          <p className="text-[13px] text-[#5A5A5A] tracking-tight font-inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut
            veniam illum neque itaque aliquid?
          </p>
          <p className="font-inter tracking-tight text-[14px] text-[#9C9C9C]">
            {type} |{" "}
            <span className="hover:underline text-[#464646] cursor-pointer">
              View Live Site ↗
            </span>
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;
