import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap, FaCss3, FaJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiFigma, SiSlack, SiTailwindcss } from "react-icons/si";

const Tech = () => {
    const Icons = [
      { id: 1, icon: <FaHtml5 />, },
      { id: 2, icon: <FaCss3 /> },
      { id: 3, icon: <FaJs /> },
      { id: 4, icon: <FaReact /> },
      { id: 5, icon: <FaBootstrap /> },
      { id: 6, icon: <SiTailwindcss /> },
      { id: 7, icon: <RiNextjsFill /> },
      { id: 8, icon: <SiFigma /> },
      { id: 9, icon: <SiSlack /> },
    ]

  return (
    <div className=" p-2 mx-4 md:mx-8 lg:mx-16 relative overflow-hidden w-70 flex ">
      <ul className="relative flex gap-4 text-[#8e8e8e] text-3xl animate-infinite-scroll">
        { 
        [...Icons, ...Icons].map(({ icon, color }, index) => (
          <li key={index}>{icon}</li>
        ))
      }
      </ul>
    </div>
  );
};

export default Tech;
