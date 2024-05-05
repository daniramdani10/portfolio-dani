import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8 ">
            Prepared to turn your ideas into reality? I'm here to help{" "}
          </h2>
          <Link href={"https://wa.me/6281271400716"}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
