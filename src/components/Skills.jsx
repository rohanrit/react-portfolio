import { useEffect } from 'react'
import Heading from './Heading/Heading';

const skillsData = [
  {
    title: "HTML",
    textColor: "text-gray-700 dark:text-white",
    width: "w-[100%]",
    bgColor: "bg-gray-600",
    percentText: "100"
  },
  {
    title: " CSS",
    textColor: "text-blue-700 dark:text-blue-500",
    width: "w-[80%]",
    bgColor: "bg-blue-600",
    percentText: "80"
  },
  {
    title: " JAVSCRIPT",
    textColor: "text-red-700 dark:text-red-500",
    width: "w-[80%]",
    bgColor: "bg-red-600",
    percentText: "80"
  },
  {
    title: " REACTJS",
    textColor: "text-green-700 dark:text-green-500",
    width: "w-[90%]",
    bgColor: "bg-green-600",
    percentText: "90"
  },

  {
    title: "NODEJS / EXPRESSJS",
    textColor: "text-yellow-700 dark:text-yellow-500",
    width: "w-[80%]",
    bgColor: "bg-yellow-400",
    percentText: "80"
  },
  {
    title: "MONGODB",
    textColor: "text-indigo-700 dark:text-indigo-500",
    width: "w-[80%]",
    bgColor: "bg-indigo-600 dark:bg-indigo-500",
    percentText: "50"
  },
  {
    title: "TAILWIND CSS",
    textColor: "text-purple-700 dark:text-purple-500",
    width: "w-[80%]",
    bgColor: "bg-purple-600 dark:bg-purple-500",
    percentText: "80"
  },
  {
    title: "BOOTSTRAP",
    textColor: "text-orange-600",
    width: "w-[90%]",
    bgColor: "bg-orange-600",
    percentText: "90"
  },
  {
    title: " NEXTJS",
    textColor: "text-green-700 dark:text-green-500",
    width: "w-[80%]",
    bgColor: "bg-green-600",
    percentText: "80"
  },
]

const Skills = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <div className="w-full min-h-[100vh] ">
      <div className="p-0 mx-auto max-w-[800px] ">
        
          <Heading heading="Core" span="Skills" />
          
          <div className="border p-5 rounded mt-3">
            {
              skillsData?.map((data) =>
                <div key={data?.title}>
                  <div className={`mb-1 text-base font-medium ${data.textColor} `}>
                    {data.title}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full  h-4.5 mb-4 dark:bg-gray-700">
                    <div className={`${data.width} ${data.bgColor} text-center   h-[100%] rounded-full dark:bg-gray-300`}>
                      {data.percentText}%
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Skills
