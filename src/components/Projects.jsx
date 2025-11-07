import Heading from "./Heading/Heading";
import ProjectCard from "./ProjectCard";
import img_proj from "../assets/heamatology-proj.png";

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
    {
      id: 2,
      title: "Recruitment Portal",
      desc: "This is a recruitment & interview portal build in wordpress hosted on AWS lightsail",
      link: "https://beewise.in/",
      jobPortaiImage: img_proj,
      heading: "Beewise",
    },
    {
      id: 3,
      title: "Horse Portal",
      desc: "This is a horse bidding website",
      link: "https://standardbredtrader.com.au/",
      jobPortaiImage: img_proj,
      heading: "standardbredtrader",
    },
    {
      id: 4,
      title: "Online Tutions",
      desc: "This is a online tutions portal build on wix studio",
      link: "https://www.preppp.com/",
      jobPortaiImage: img_proj,
      heading: "Preppp",
    },
    {
      id: 5,
      title: "Vetinary Equipments Portal",
      desc: "This is a horse health equipments selling portal build in wordpress hosted on AWS lightsail",
      link: "https://www.vetalyze.com.au/",
      jobPortaiImage: img_proj,
      heading: "vetalyze",
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
