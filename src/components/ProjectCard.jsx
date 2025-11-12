import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQmvZ51fwJLJaS0P8ZRTITiTBCjlbTrlAqA&s";

  return (
    <div className=" group flex justify-center flex-col items-center cursor-pointer">
      <div class="relative h-64 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={data.jobPortaiImage ? data.jobPortaiImage : image}
          alt={data.title}
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-10">
          <h3 class="text-xl font-semibold mb-2">{data.title}</h3>
          <p class="text-sm mb-3">{data.desc}</p>
          <NavLink
            to={data.link}
            target="_blank"
            className="bg-black inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:text-black text-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
          >
            Live preview
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </div>
      <NavLink
        to={data.link}
        target="_blank"
        className="pt-3 text-gray-700 dark:text-gray-300 font-semibold capitalize"
      >
        {data.heading}
      </NavLink>
    </div>
  );
};

export default ProjectCard;
