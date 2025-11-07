import Heading from "./Heading/Heading";
import ProjectCard from "./ProjectCard";

import img_proj from "../assets/heamatology-proj.png";
import img_1 from "../assets/job_portal.png";
import img_2 from "../assets/e_commerce.png";
import img_3 from "../assets/electronics_web.png";
import img_4 from "../assets/amazon.png";

const Projects = () => {
  const webSitesArray = [
    {
      id: 1,
      title: "Blood Report Portal",
      desc: "This is a Horse Blood Report Portal Website using Reactjs, Nodejs and MongoDb",
      link: "https://digitallabresultapp.vercel.app/",
      jobPortaiImage: img_proj,
      heading: "RapidBlood",
    },
  ];
  return (
    <section className="container mx-auto px-4">
      <div className="px-10 py-16 text-center">
        <div className="pb-4">
          <Heading span="Projects" heading="My" />
        </div>
        <div className="w-full mx-auto grid lg:grid-cols-3 justify-self-center md:grid-cols-2 grid-cols-1 gap-5 pt-5">
          {webSitesArray?.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
