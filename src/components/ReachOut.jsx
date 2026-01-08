import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.svg";

const ReachOut = () => {
  return (
    <div className=" my-8 relative">
      <img
        className="h-full w-full object-cover absolute"
        src={placeholder}
        alt=""
      />
      <div className="flex flex-col w-full justify-center items-center z-10 relative py-16 gap-6">
        <p className="font-geist text-3xl sm:text-5xl lg:text-6xl tracking-tighter px-20 sm:px-40 md:px-70 lg:px-90 text-center font-medium">
          If you would like to chat you can reach me at:
        </p>
        <div className="flex items-center gap-2">
          <Link className="p-3 px-4 bg-black/10 font-inter tracking-tight text-[#696969] rounded-xl text-[14px] lg:text-xl">
            israelbalogun15@gmail.com
          </Link>
          <p className="font-inter tracking-tight font-medium">Or via</p>
          <Link className="p-3 px-4 bg-black/10 font-inter tracking-tight text-[#696969] rounded-xl text-[14px] lg:text-xl">
            @israel07
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
