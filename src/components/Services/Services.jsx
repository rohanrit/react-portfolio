import frontendImg from '../../assets/frontend-icon.png'
import frontendImgCol from '../../assets/frontend-icon-col.png'
import backendImg from '../../assets/backend-icon.png'
import backendImgCol from '../../assets/backend-icon-col.png'
import uiuxImg from '../../assets/ui-ux-icon.png'
import uiuxImgCol from '../../assets/ui-ux-icon-col.png'
import digitalartImg from '../../assets/digital-artist.png'
import digitalartImgCol from '../../assets/digital-artist-col.png'
import Heading from '../Heading/Heading'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="services text-center py-10 mt-4 lg:w-[100%] md:w-[100%] w-[100%] mx-auto bg-#333333">
        <div className="heading ">
          <Heading heading="My" span="Experties" />
        </div>

        {/* <div className="cards mt-10 w-full flex justify-center gap-6"> */}
        <div className="relative cards mt-10 grid w-full gap-4 justify-center lg:grid-cols-4 md:grid-cols-2 md:gap-4 sm:grid-cols-2 grid-cols-1">
          <div className="anim card_1">
            <ServicesCard
              Image={frontendImg}
              imgHover={frontendImgCol}
              heading="Frontend Developer"
              text="I focus on Highend Layouts, Component Building, State Management, Performance Optimization, Accessibility, Cross‑Browser Compatibility"
            />
          </div>
          <div className="anim card_3">
            <ServicesCard
              Image={uiuxImg}
              imgHover={uiuxImgCol}
              heading="UI/UX Developer"
              text="I focus on Prototyping, Wireframing, User Research, Interaction Design, Usability Testing"
            />
          </div>
          <div className="anim card_2">
            <ServicesCard
              Image={backendImg}
              imgHover={backendImgCol}
              heading="Web & Graphic Designer"
              text="I focus on Layout Design, Branding, Typography, Color Theory, Visual Storytelling, Responsive Design"
            />
          </div>
          <div className="anim card_2">
            <ServicesCard
              Image={digitalartImg}
              imgHover={digitalartImgCol}
              heading="Digital Artist, Photo editor"
              text="I focus on Image Retouching, Color Correction, Photo Manipulation, Compositing, Illustration, Creative Enhancements"
            />
          </div>
        </div>
      </div>
      </section>
  )
}

export default Services
