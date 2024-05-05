import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  University,
  User2,
} from "lucide-react";
import React from "react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Dani Ramdani",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 812 7140 0716",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ddaniramdani10@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "10 Desember 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Informatics Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "South Jakarta",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Harisenin",
        qualification: "Fullstack Web Development Bootcamp",
        years: "2023 - 2024",
      },
      {
        university: "Kuninigan University",
        qualification: "Bachelor of Information Engineering",
        years: "2015 - 2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Roomfazza",
        role: "Social media specialist",
        years: "2023 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Javascript, React, Redux, Tailwind",
      },
      {
        name: "Node js, Express js, Prisma, Sequelize",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16">About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles={`bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative`}
              imgSrc={"/about/about-profile.png"}
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 max-w-[520px] border dark:border-none ">
                <TabsTrigger className="w-[130px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[130px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[130px] xl:w-auto" value="skill">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal  */}
                <TabsContent value="personal">
                  <div className="text-left">
                    <h3 className="h3 mb-4">Junior Fullstack Web Developer</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive website with
                      citting-edge technology, deivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 "
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Indonesia, Engish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8">My awesome journey</h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 ">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 ">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills  */}
                <TabsContent value="skill">
                  <div>
                    <h3 className="h3 mb-8">Tools I use everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="h4 mb-2">Tech Stack</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list  */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div key={index} className="w-2/4 ">
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className="h4">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list  */}
                      <div className="flex gap-x-8 justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                alt="logo"
                                width={48}
                                height={48}
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
