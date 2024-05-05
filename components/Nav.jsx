import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { motion } from "framer-motion";

//hooks
const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "https://wa.me/6281271400716",
    name: "whatsapp",
  },
];
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${linkStyles} capitalize`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={underlineStyles}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
