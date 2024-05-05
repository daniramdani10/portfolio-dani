"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine, RiWhatsappFill } from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  const handleDownloadCv = () => {
    // Mendapatkan URL CV dari folder public
    const cvURL = "/cv/dani_ramdani.pdf";

    // Membuat link untuk mengunduh CV
    const downloadLink = document.createElement("a");
    downloadLink.href = cvURL;
    downloadLink.download = "dani_ramdani.pdf";

    // Mengklik link secara otomatis untuk mengunduh CV
    downloadLink.click();
  };
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Fullstack Developer
            </div>
            <h1 className="h1 mb-4">Helo, my name is Dani</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am a junior fullstack developer who has attended a fullstack
              developer bootcamp at Harisenin
            </p>
            {/* buttons */}
            <div className="flex gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="https://wa.me/6281271400716">
                <Button className="gap-x-2">
                  Contact me <RiWhatsappFill size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2"
                onClick={handleDownloadCv}
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials  */}
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles={`bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom`}
              imgSrc={`/hero/hero-profile.png`}
            />
          </div>
        </div>
        {/* icons  */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
