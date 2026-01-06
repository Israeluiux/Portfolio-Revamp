import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="px-4 py-8 md:py-12 md:px-16">
      <div className="font-inter tracking-tight font-medium flex justify-between items-center">
        <h1 className="text-3xl">Featured Projects</h1>
        <p className="text-xl text-[#696969]">25' to Present</p>
      </div>
      <div className="mt-4">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
