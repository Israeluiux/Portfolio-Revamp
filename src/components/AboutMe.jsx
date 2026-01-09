import { Link } from "react-router-dom";
import Israel from "../assets/Israel.jpeg"
import { easeInOut, motion, useAnimate } from "motion/react";
import { useEffect } from "react";

const AboutMe = () => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor
            alias officiis quasi accusamus error, aliquam pariatur praesentium
            quidem rem provident nostrum inventore iste? Exercitationem impedit
            suscipit quod dignissimos mollitia harum cupiditate laudantium,
            dolorum velit doloremque sapiente libero rerum minus?`

  const fadeup = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1,
        ease: easeInOut
      }
    }
  }

  return (
    <div className="mb-12 mx-4 md:mx-8 lg:mx-16 text-white bg-black rounded-3xl p-6 lg:p-8 flex-col lg:flex-row flex  justify-between gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-geist text-3xl tracking-tight">
          A little about me...
        </h1>
        <div className="lg:w-150 font-inter tracking-tight text-[14px] text-[#5A5A5A] flex flex-col gap-4">
          <motion.p 
            variants={fadeup}
            initial="hidden"
            whileInView={`visible`}
            viewport={{ once: true }}
            >
              {text} &nbsp;
              </motion.p>
          <motion.p className="text-white" 
            variants={fadeup}
            initial="hidden"
            whileInView={`visible`}
            viewport={{ once: true }}
            >
              {text} &nbsp;
              </motion.p>
          <motion.p 
            variants={fadeup}
            initial="hidden"
            whileInView={`visible`}
            viewport={{ once: true }}
            >
              {text} &nbsp;
              </motion.p>
        </div>
        <Link className="px-3 py-1.5 font-medium bg-white text-[#0a0a0a] rounded-full w-fit font-inter tracking-tight">
          Check me
        </Link>
      </div>
      <div className="h-100 bg-white w-full lg:w-80 rounded-2xl">
        <img src={Israel} className="w-full h-full object-cover rounded-2xl" alt="Balogun Israel Oluwatosin" />
      </div>
    </div>
  );
};

export default AboutMe;
