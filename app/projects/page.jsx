"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { React, useState } from "react";

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

// remove category duplicates
const uniqueCategory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((item) => {
    // if category is 'all projects', return all projects, else filter by category
    return category === "all projects" ? item : item.category === category;
  });
  return (
    <section>
      <div className="min-h-screen pt-12">
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16">My projects</h2>
          {/* tabs  */}
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="w-full grid h-full grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((item, index) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(item)}
                    value={item}
                    key={index}
                    className="capitalize w-[162px] md:w-auto"
                  >
                    {item}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content  */}
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
