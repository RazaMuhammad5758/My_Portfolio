"use client"
import { useState } from "react"
import logo from "../source/raza.png"
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"
import { SiWhatsapp } from "react-icons/si"
import { motion } from "framer-motion"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-[#0f0f0fb3] shadow-md transition-all duration-300">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center"
        >
          <img
            className="h-10 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => window.location.reload()}
          />
        </motion.div>

        {/* Nav Links */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex flex-1 justify-center space-x-8"
        >
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-lg text-neutral-300 hover:text-white transition-colors duration-300 relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex gap-4 text-white"
        >
          <a className="text-2xl hover:text-blue-500" href="https://www.linkedin.com/in/raza-muhammad-113915219/" target="_blank"><FaLinkedin /></a>
          <a className="text-2xl hover:text-green-700" href="https://github.com/RazaMuhammad5758" target="_blank"><FaGithub /></a>
          <a className="text-2xl hover:text-blue-400" href="https://facebook.com/profile.php?id=100042283539975" target="_blank"><FaFacebook /></a>
          <a className="text-2xl hover:text-green-500" href="https://wa.me/+923422475758" target="_blank"><SiWhatsapp /></a>
          <a href="https://instagram.com/raza__muhammad_" target="_blank">
            <span className="text-2xl text-transparent bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text hover:opacity-90">
              <FaInstagram />
            </span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl mr-10 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#0f0f0f] text-white transition-all duration-300">
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-purple-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
            <a className="text-2xl hover:text-blue-500" href="https://www.linkedin.com/in/raza-muhammad-113915219/" target="_blank"><FaLinkedin /></a>
            <a className="text-2xl hover:text-green-700" href="https://github.com/RazaMuhammad5758" target="_blank"><FaGithub /></a>
            <a className="text-2xl hover:text-blue-400" href="https://facebook.com/profile.php?id=100042283539975" target="_blank"><FaFacebook /></a>
            <a className="text-2xl hover:text-green-500" href="https://wa.me/+923422475758" target="_blank"><SiWhatsapp /></a>
            <a href="https://instagram.com/raza__muhammad_" target="_blank">
              <span className="text-2xl text-transparent bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text hover:opacity-90">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
