import Heading from "./Heading/Heading";
import ProjectCard from "./ProjectCard";
import heamatology_proj from "../assets/heamatology-proj.png";
import beewise_proj from "../assets/beewise-proj.png";
import preppp_proj from "../assets/preppp-proj.png";
import standardbredtrader_proj from "../assets/standardbredtrader-proj.png";
import vetalyze_proj from "../assets/vetalyze-proj.png";

const Projects = () => {
  const webSitesArray = [
    {
      id: 1,
      title: "Blood Report Portal",
      desc: "This is a Horse Blood Report Portal Website using Reactjs, Nodejs and MongoDb",
      link: "https://digitallabresultapp.vercel.app/",
      jobPortaiImage: heamatology_proj,
      heading: "RapidBlood",
    },
    {
      id: 2,
      title: "Recruitment Portal",
      desc: "This is a recruitment & interview portal build in wordpress hosted on AWS lightsail",
      link: "https://beewise.in/",
      jobPortaiImage: beewise_proj,
      heading: "Beewise",
    },
    {
      id: 3,
      title: "Horse Portal",
      desc: "This is a horse bidding website",
      link: "https://standardbredtrader.com.au/",
      jobPortaiImage: standardbredtrader_proj,
      heading: "standardbredtrader",
    },
    {
      id: 4,
      title: "Online Tutions",
      desc: "This is a online tutions portal build on wix studio",
      link: "https://www.preppp.com/",
      jobPortaiImage: preppp_proj,
      heading: "Preppp",
    },
    {
      id: 5,
      title: "Vetinary Equipments Portal",
      desc: "This is a horse health equipments selling portal build in wordpress hosted on AWS lightsail",
      link: "https://www.vetalyze.com.au/",
      jobPortaiImage: vetalyze_proj,
      heading: "vetalyze",
    },
  ];
  return (
      <section className="container mx-auto px-4">
        <div className="px-0 py-16 text-center">
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
