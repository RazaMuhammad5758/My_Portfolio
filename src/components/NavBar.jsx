import React from 'react'
import logo from '../source/raza.png'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <nav className=' flex items-center justify-between '>
        <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.2 }}
              className='flex flex-shrink-0 items-center'>
              <img 
                  className='h-10 ml-5 cursor-pointer' 
                  src={logo} 
                  alt="logo" 
                  onClick={() => window.location.reload()} // Add this onClick handler
              />
          </motion.div>


        <motion.div
        whileInView={{ opacity:1, x:0 }}
        initial= {{ opacity:0, x:100 }}
        transition={{ duration: 1, delay: 0.2,}}
        className='flex gap-4 m-8 text-white'>
            <div className='text-3xl cursor-pointer hover:text-blue-500'><a href="https://www.linkedin.com/in/raza-muhammad-113915219/"><FaLinkedin/></a></div> 
            <div className='text-3xl cursor-pointer hover:text-green-700'><a href="https://github.com/RazaMuhammad5758"><FaGithub/></a></div>
            <div className='text-3xl cursor-pointer hover:text-blue-400'><a href="https://www.facebook.com/profile.php?id=100042283539975&mibextid=ZbWKwL"><FaFacebook/></a></div>
            <div className='text-3xl cursor-pointer hover:text-green-500'><a href="https://wa.me/+923422475758"><SiWhatsapp/></a></div>
        </motion.div>
    </nav>
  )
}

export default NavBar
