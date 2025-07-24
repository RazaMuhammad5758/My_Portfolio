"use client"
import logo from "../source/raza.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { SiWhatsapp } from "react-icons/si"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-[#0f0f0fb3] shadow-md flex items-center justify-between py-1 px-4 md:px-8 transition-all duration-300">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-shrink-0 items-center"
      >
        <img
          className="h-10 ml-5 cursor-pointer"
          src={logo || "/placeholder.svg"}
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hidden md:flex items-center space-x-8"
      >
        <a
          className="text-lg text-neutral-300 hover:text-white transition-colors duration-300 cursor-pointer relative group"
          href="#about"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-lg text-neutral-300 hover:text-white transition-colors duration-300 cursor-pointer relative group"
          href="#experience"
        >
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-lg text-neutral-300 hover:text-white transition-colors duration-300 cursor-pointer relative group"
          href="#projects"
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-lg text-neutral-300 hover:text-white transition-colors duration-300 cursor-pointer relative group"
          href="#contact"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </motion.div>

      {/* Social MediLink Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex gap-4 m-8 text-white"
      >
        <div className="text-3xl cursor-pointer hover:text-blue-500 transition-colors duration-300">
          <a href="https://www.linkedin.com/in/raza-muhammad-113915219/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-3xl cursor-pointer hover:text-green-700 transition-colors duration-300">
          <a href="https://github.com/RazaMuhammad5758" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="text-3xl cursor-pointer hover:text-blue-400 transition-colors duration-300">
          <a
            href="https://www.facebook.com/profile.php?id=100042283539975&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="text-3xl cursor-pointer hover:text-green-500 transition-colors duration-300">
          <a href="https://wa.me/+923422475758" target="_blank" rel="noopener noreferrer">
            <SiWhatsapp />
          </a>
        </div>
        <div className="text-3xl cursor-pointer hover:text-purple-500 transition-colors duration-300">
          <a
           href="https://www.instagram.com/raza__muhammad_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </motion.div>

      {/* Mobile Menu Button (Optional) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="md:hidden flex items-center"
      >
        <button className="text-white text-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.div>
    </nav>
  )
}

export default NavBar
