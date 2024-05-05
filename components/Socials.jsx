"use client";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";
import React from "react";
import Link from "next/link";

const icons = [
  {
    path: "https://github.com/daniramdani10",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/dani-ramdani10",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.instagram.com/daniramdani10",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <span className={`${iconsStyles}`}>{icon.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
