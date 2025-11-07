/* eslint-disable react/prop-types */

const Heading = ({ heading, span }) => {
  return (
    <h1 className="lg:text-4xl md:text-3xl  sm:text-2xl text-2xl font-bold text-gray-700 dark:text-gray-300">
      {heading} <span className="text-brand dark:text-brand-dark">{span}</span>
    </h1>
  )
}

export default Heading
