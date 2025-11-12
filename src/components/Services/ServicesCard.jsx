/* eslint-disable react/prop-types */
const ServicesCard = ({ Image, imgHover, heading, text }) => {
  return (
    <div className="h-full bg-blue-100 dark:bg-gray-600  text-gray-700 dark:text-gray-300 card flex flex-col justify-center items-center  px-4 py-10 rounded-2xl ">
      <img src={imgHover} alt="frontend-image-light" className="block dark:hidden w-[40px] py-3" />
      <img src={Image} alt="frontend-image-dark" className="hidden dark:block w-[40px] py-3" />
      <h1 className="text-2xl font-semibold px-6">{heading} </h1>
      <p className="text-sm py-3 px-5">{text}</p>
    </div>
  )
}

export default ServicesCard
