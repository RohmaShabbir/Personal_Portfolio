'use client'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-2 ">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-6 text-sm hover:text-gray-300 transition-colors duration-300"
          >
            BACK TO TOP
          </button>
          <div className="flex space-x-6 mb-6">
            <Link href="https://www.facebook.com/rohmafatima.ramuu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/rohma-shabbir-216a662ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
            <Link href="https://www.instagram.com/rohma_fatima662/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
            <Link href="mailto:rohmafatima132@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
          </div>
          <p className="text-xs text-gray-400">
            ©{currentYear} Rohma Shabbir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

