import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.svg";

const ReachOut = () => {
  return (
    <div className="relative">
      <img className="absolute" src={placeholder} alt="" />
      <div className="flex flex-col justify-center items-center py-16 gap-6 relative">
        <p className="font-geist text-6xl tracking-tighter w-110 text-center font-medium">
          If you would like to chat you can reach me at:
        </p>
        <div>
          <Link className="p-3 px-4 bg-black/10 font-inter tracking-tight text-[#696969] rounded-xl text-xl">
            israelbalogun15@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
