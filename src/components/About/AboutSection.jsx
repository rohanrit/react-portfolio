import Heading from "../Heading/Heading";
import Skills from "../Skills";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-center lg:py-0">
        <div className="col-span-1 w-full flex justify-center items-center mt-5 lg:mt-0 md:mt-0 ">          
          <Skills/>
        </div>
        <div className="col-span-2 lg:px-5  about-content">
          <Heading heading="About" span="Me" />
          <h2 className="anim sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 md:text-2xl text-xl my-4 ">
            I am Senior Frontend developer with 16+ years in HTML/CSS/JS, 10 years in Figma/prototyping, and 18 years in graphic/web design—working at SOCi/testriq, worked at Knorish, Scientity, TVS, Bedanta, IMES—specializing in frontend frameworks and libraries like React/Next.js and conversion‑focused UI. Having Expert knowledge in online website builder like WIX, KNORISH, DIVI & Elementor (Wordpress). Recently built a Next.js PDF‑reading RAG extractor and secure NestJS/Node APIs for horse data with TypeScript/Tailwind; skills include React, Next.js, Node.js, Express, MongoDB, MySQL, Figma, and Adobe tools. Designer. A photographer, best in image editing and restoration.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
