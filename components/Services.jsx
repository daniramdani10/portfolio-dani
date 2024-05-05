import { Database, Figma, LaptopMinimal } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const serviceData = [
  {
    icon: <Figma size={72} strokeWidth={0.8} />,
    title: "Web design",
    description: "Design a dynamic web according to business needs using figma",
  },
  {
    icon: <LaptopMinimal size={72} strokeWidth={0.8} />,
    title: "Frontend development",
    description:
      "Create a responsive and interactive website using nextjs to make it more attractive",
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "Backend development",
    description:
      "Build a backend using nodejs and expressjs to make it more secure and scalable",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16">My services</h2>
        {/* grid item */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
