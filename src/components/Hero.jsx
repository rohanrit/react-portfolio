import image from "../assets/rohanritprofile.png";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoInstagramAlt } from "react-icons/bi";

const Hero = () => {
  return (
      <section className="container mx-auto px-4">
        <div class="grid grid-cols-12 gap-6 p-6 pt-[150px] mt-0 text-white">
          <div class="col-span-12 md:col-span-8 order-2 md:order-1 p-8 rounded-lg">
            <div>
              <h2 className="anim  lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-bold">
                Hii there, {`It's`}
                <span className="text-green-400 "> Me</span>
              </h2>
              <h1 className="anim  lg:text-5xl md:text-5xl sm:text-4xl text-3xl my-4 font-bold">Ritesh Rohan</h1>
              <p className="anim  text-md  ">
                I am Senior Frontend developer with 16+ years in HTML/CSS/JS, 10 years in Figma/prototyping, and 18 years in graphic/web design—Ex: [Company 1], [Company 2], [Company 3]—specializing
                in React/Next.js and conversion‑focused UI. Recently built a Next.js PDF‑reading RAG extractor and secure NestJS/Node APIs for horse data with TypeScript/Tailwind; skills include
                React, Next.js, Node.js, Express, MongoDB, MySQL, Figma, and Adobe tools. Designer.
              </p>
            </div>

            <div className="flex flex-wrap lg:pt-8 md:pt-8 sm:pt-5 pt-5  lg:flex gap-5 lg:gap-10 md:gap-8  items-center">
              <div className="social-media flex gap-2">
                <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
                  <BiLogoFacebook className="text-xl text-green-400" />
                </button>
                <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
                  <BiLogoTwitter className="text-xl text-green-400" />
                </button>
                <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
                  <BiLogoLinkedin className="text-xl text-green-400" />
                </button>
                <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
                  <BiLogoInstagramAlt className="text-xl text-green-400" />
                </button>
              </div>

              <div className="contact-me">
                <button className="anim btn contact-btn bg-green-400 px-10 py-2 rounded">Contact me</button>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4 order-1 md:order-2 p-8 rounded-lg text-center">
            <div className="hero-img anim lg:order-2 rounded-full overflow-hidden">
              <img className="w-full overflow-hidden rounded-full border-2 border-green-400 md:text-center  shadow-green-200" src={image} alt="profile-image" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
