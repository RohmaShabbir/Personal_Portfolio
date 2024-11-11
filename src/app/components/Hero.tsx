'use client';
import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FiLinkedin } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image"; 
import profile from "../assets/projects/profile.jpg";

const Hero = () => {
  return (
    <div id="Hero" className="border-b border-neutral-900 pb-28 lg:pb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-4xl sm:text-5xl font-thin tracking-tight lg:text-7xl lg:mt-16">
              Rohma Shabbir
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent">
              <h2>Hello I’m</h2>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <br />
            <div className="flex justify-center space-x-4 mt-6 relative z-20">
              <Link
                href="#"
                target="_blank"
                className="p-3 bg-gray-800 rounded shadow-md"
              >
                <FaDiscord className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://github.com/RohmaShabbir"
                target="_blank"
                className="p-3 bg-gray-800 rounded shadow-md"
              >
                <FaGithub className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rohma-shabbir-216a662ba/"
                target="_blank"
                className="p-3 bg-gray-800 rounded shadow-md"
              >
                <FiLinkedin className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-6 lg:p-16">
          <div className="flex items-center justify-center">
            <Image
              src={profile}
              alt="Rohma Shabbir"
              className="rounded-2xl"
              width={384}  
              height={384}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
