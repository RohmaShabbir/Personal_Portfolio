"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { navLinksdata } from '../constants';
import Image from 'next/image';  
import logo from "../assets/projects/logo.jpg";

const ScrollLink = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });

const Navbar = () => {
  return (
    <div className='h-18 mb-20 flex items-center justify-between p-6'>
      <div className="flex items-center">
        <Image 
          src={logo} 
          alt="logo" 
          className="w-12 h-12 rounded-lg" 
          width={48}    
          height={48}   
        />
      </div>
      <div className='rounded-lg px-2 py-1 text-slate-400 font-semibold'>
        <ul className='gap-6 lg:gap-10 hidden md:flex'>
          {
            navLinksdata.map(({ _id, title, link }) => (
              <li key={_id} className='menuLink hover:text-white transition-colors duration-200'>
                <ScrollLink
                  activeClass='active'
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </ScrollLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
