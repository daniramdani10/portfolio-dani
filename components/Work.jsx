import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required module
import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Sportwear Commerce",
    description:
      "Clone of the original website, created using React.js in frontend and for the backend using Node.js, Express.js and Sequelize.",
    link: "/",
    github: "https://github.com/daniramdani10/project-harisenin-fullstack-kel7",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Otaku Coffee and Roastery",
    description:
      "Create a website for an otaku coffee and roastery. react js and Tailwind css on frontend and Node.js and Express.js on backend.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="max-w-[400px] mx-0 mb-12 xl:h-[400px] flex flex-col justify-center">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            This is the latest project I'm working on
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div>
          {/* slider  */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only 4 latest projects */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    {<ProjectCard project={project} />}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
