import React from 'react'
import { HERO_CONTENT } from '../constants'
import hero from '../source/profile3.png'
import { motion } from "framer-motion"

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
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 mt-20'>
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
                            Front-end Developer
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
                            whileTap={{ scale: 0.9 }}>
                            Download Resume
                        </motion.a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className='w-3/4' src={hero} alt="hero_pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
