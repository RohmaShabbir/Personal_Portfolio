import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si"
import { FaNodeJs } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoMongodb } from "react-icons/bi";

const Skills = () => {
  return (
    <div id='Skills' className='border-b border-neutral-800 pb-24 '>
      <h2 className='my-20 text-center text-4xl'>Skills</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-6xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-6xl'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className='text-6xl text-blue-300'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className='text-6xl text-cyan-900'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-6xl text-green-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-6xl text-purple-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-6xl text-orange-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className='text-6xl text-blue-500'/>
        </div>
      </div>
      <h2 className='my-20 text-center text-4xl'>Learning</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNextjsFill  className='text-6xl text-black'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoMongodb  className='text-6xl text-green-400'/>
        </div>
      </div>
    </div>
  )
}

export default Skills
