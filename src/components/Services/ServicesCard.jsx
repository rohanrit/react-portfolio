/* eslint-disable react/prop-types */
const ServicesCard = ({ Image, heading, text }) => {
  return (
    <div className=" bg-blue-100 dark:bg-gray-600  text-gray-700 dark:text-gray-300 card flex flex-col justify-center items-center  px-4 py-10 rounded-2xl ">
      <img src={Image} alt="frontend-image-light" className="block dark:hidden w-[40px] py-3" />
      <img src={Image} alt="frontend-image-dark" className="hidden dark:block w-[40px] py-3" />
      <h1 className="text-2xl font-semibold px-6">{heading} </h1>
      <p className="text-sm py-3 px-5">{text}</p>
      <button className="bg-blue-400 hover:bg-blue-600 py-2 px-3 rounded text-black my-3">
        See moree...
      </button>
    </div>
  )
}

export default ServicesCard
