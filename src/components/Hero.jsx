import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="font-geist px-4 py-8 md:py-12 md:px-16 flex flex-col gap-4">
      <p className="md:w-180 text-6xl leading-14.5 text-[#0A0A0A] tracking-tighter font-medium">
        <span className="flex items-center gap-4">
          Hey, I'm Israel{" "}
          <div className="h-10 w-10 bg-blue-800 rounded-[10px] rotate-6"></div>
        </span>
        I design and craft bold websites for businesses across all industries.
      </p>
      <Link className="p-2.5 px-5 bg-black text-white rounded-full w-fit font-medium">
        Get in touch
      </Link>
    </div>
  );
};

export default Hero;
