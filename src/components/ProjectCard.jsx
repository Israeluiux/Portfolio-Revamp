import { Project } from "../libs/project";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Project.map(({ id, title, year, type }) => (
        <div key={id} className="flex flex-col gap-2">
          <div className="h-80 bg-black hover:rounded-2xl"></div>
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
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
