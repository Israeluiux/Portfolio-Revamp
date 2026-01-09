import { BiRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import darkdot from "../assets/darkdot.svg";
import Israel from "../assets/Israel.jpeg"
import { SiBehance, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const Footer = () => {
  return (
    <div className="relative mt-4 mb-2 mx-2 rounded-2xl h-auto text-white">
      <img
        src={darkdot}
        className="w-full h-full object-cover absolute rounded-2xl"
        alt=""
      />
      <div className="relative px-4 py-8 md:py-12 md:px-12 z-10">
        <div className="h-10 w-10 bg-blue-800 rounded-[10px] border-2 border-white rotate-6">
          <img src={Israel} className="w-full h-full object-cover rounded-[10px]" alt="Balogun Israel Oluwatosin" />
        </div>
        <h2 className="text-4xl font-inter tracking-tighter mt-6 w-90 font-medium">
          Always searching for new problems, fun teams and great ideas.
        </h2>
        <p className="font-inter tracking-tight text-[14px] mt-4 text-[#9C9C9C]">
          If this sounds like you, reach out :)
        </p>
        <Link className="p-2.5 px-5 bg-white text-black font-inter tracking-tight rounded-full mt-4 w-fit font-medium flex items-center gap-2">
          Get in touch <BiRightArrowCircle />
        </Link>
        <hr className="my-8 text-[#353535]" />
        <div className="flex justify-between">
          <p className="font-geist tracking-tight text-[#9C9C9C]">
            Built with ❤️ by Balogun Israel
          </p>
          <div className="flex gap-2.5 text-xl">
            <SiLinkedin />
            <SiX />
            <SiInstagram />
            <SiBehance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
