import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { id: 1, path: "", name: "About" },
    { id: 2, path: "", name: "Projects" },
  ];

  return (
    <div className="font-inter tracking-tight border-b border-b-[#d6d6d6]">
      <div className="max-w-7xl m-auto px-4 md:px-16 py-4 flex justify-between items-center">
        <Link>Israel.dev</Link>

        <div className="text-[15px] text-[#030303] flex gap-3 items-center">
          {Links.map(({ id, path, name }) => (
            <Link key={id} className=" hover:underline">
              {name}
            </Link>
          ))}
          <Link className="bg-black/10 p-1 px-3 rounded-full">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
