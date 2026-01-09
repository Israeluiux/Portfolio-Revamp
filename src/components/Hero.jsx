import { BiRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Israel from "../assets/Israel.jpeg"
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div 
        initial={{
          y: 60,
          opacity: 0,
          filter: "blur(2px)",
        }}

        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}

        transition={{
          duration: 1,
        }}

      className="font-geist px-4 py-8 md:py-12 md:px-8 lg:px-16 flex flex-col gap-4">
      <p className="md:w-180 text-4xl  md:text-6xl leading-10 md:leading-14.5 text-[#0A0A0A] tracking-tighter font-medium">
        <span className="flex items-center gap-4">
          Hey, I'm Israel{" "}
          <div className="h-10 w-10 rounded-[10px] rotate-6">
            <img src={Israel} className="w-full h-full object-cover rounded-[10px]" alt="Balogun Israel Oluwatosin" />
          </div>
        </span>
        I design and craft bold websites for businesses across all industries.
      </p>
      <Link className="p-2.5 px-5 bg-black text-white tracking-tight rounded-full w-fit font-medium flex items-center gap-2">
        Get in touch <BiRightArrowCircle />
      </Link>
    </motion.div>
  );
};

export default Hero;
