import React from "react";
import image from "../assets/rohanritprofile.png";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
} from "react-icons/bi";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 transition-colors duration-300">
      <div className="grid grid-cols-12 gap-6 p-6 pt-[150px] mt-0 text-gray-900 dark:text-gray-100">
        
        {/* ===== Left Text Section ===== */}
        <div className="col-span-12 md:col-span-8 order-2 md:order-1 p-8 rounded-lg bg-transparent">
          <div>
            <h2 className="anim text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
              Hi there, {`It's`}
              <span className="text-brand dark:text-brand-dark"> Me</span>
            </h2>

            <h1 className="anim text-3xl sm:text-4xl md:text-5xl lg:text-5xl my-4 font-bold">
              Ritesh Rohan
            </h1>

            <p className="anim text-md text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently working at SOCi.inc | Ex-knorisher | Sr. Frontend Designer | 
              Graphic Designer | UI/UX Designer | Photographer | Digital Artist | 
              Printing Expert | Sketch Artist | A Father | Ex-Nobilian | DIY Expert & a helpful friend.
            </p>
          </div>

          {/* ===== Social Media Icons ===== */}
          <div className="flex flex-wrap pt-5 sm:pt-5 md:pt-8 lg:pt-8 gap-5 md:gap-8 lg:gap-10 items-center">
            <div className="flex gap-3">
              {[
                { Icon: BiLogoFacebook, href: "https://facebook.com" },
                { Icon: BiLogoTwitter, href: "https://twitter.com" },
                { Icon: BiLogoLinkedin, href: "https://linkedin.com" },
                { Icon: BiLogoInstagramAlt, href: "https://instagram.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anim btn border-2 border-brand dark:border-brand-dark p-2 rounded-full hover:bg-brand dark:hover:bg-brand-dark hover:text-white transition"
                >
                  <Icon className="text-xl text-brand dark:text-brand-dark" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Right Image Section ===== */}
        <div className="col-span-12 md:col-span-4 order-1 md:order-2 p-8 text-center">
          <div className="hero-img anim rounded-full overflow-hidden border-4 border-brand dark:border-brand-dark shadow-lg shadow-brand/30 dark:shadow-brand-dark/30 transition-all duration-300">
            <img
              className="w-full rounded-full"
              src={image}
              alt="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
