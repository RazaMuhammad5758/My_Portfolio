import React, { useState } from 'react';
import { HERO_CONTENT } from '../constants';
import hero from '../source/profile pic 1.jpg';
import hero2 from '../source/profile pic 2.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5 + delay,
            duration: 0.5
        }
    }
});

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 mt-10'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                            Raza Muhammad
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent'>
                            MERN Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracker-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            href='/Resume.pdf' // Replace with your actual resume path
                            download='Resume.pdf'
                            className='mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-transform transform hover:scale-105'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.5 }}>
                            Download Resume
                        </motion.a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            key={isHovered ? 'hero2' : 'hero1'} // Ensure unique key for each image
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }} // Smooth fade and scale transition
                            className='w-3/4'
                            src={isHovered ? hero2 : hero} // Dynamically switch image
                            alt="hero_pic"
                            onMouseEnter={() => setIsHovered(true)} // Trigger hover state
                            onMouseLeave={() => setIsHovered(false)} // Reset hover state
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
