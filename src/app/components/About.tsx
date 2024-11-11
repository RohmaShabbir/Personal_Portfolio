import React from "react";
import Image from "next/image";
import about from "../assets/projects/about.jpg";

const About = () => {
  return (
    <div id="About" className="border-b border-neutral-900 pb-28">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-16">
          <div className="flex items-center justify-center">
            <Image
              src={about}
              alt="Portrait of Rohma"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-20">
              Hello! I’m Rohma, a 20-year-old with a fresh foundation in
              academics, having recently completed my Intermediate studies. I’m
              currently advancing my technical skills through an intensive IT
              course at the prestigious Governor House, where I’m delving into
              advanced technologies, particularly Next.js and JavaScript. With a
              strong passion for web development, I’m driven to stay at the
              forefront of this dynamic field. I love exploring new frameworks
              and tools that push the boundaries of what’s possible on the web.
              My goal is not just to grow as a developer but to craft impactful,
              user-focused experiences that keep up with today’s fast-paced
              digital world. As I continue building my expertise, I’m excited to
              see where this journey in technology will lead!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
