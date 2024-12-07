import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import {RiTailwindCssFill } from 'react-icons/ri'
import {FaBootstrap } from 'react-icons/fa'
import {TbBrandMongodb, TbBrandMysql } from 'react-icons/tb'
import {BiLogoPostgresql } from 'react-icons/bi'
import {TbBrandJavascript } from 'react-icons/tb'
import {animate, motion} from "framer-motion"


const iconVarients = (duraion) => ({
    initial: {y:-10},
    animate: {
        y:[10, -10],
        transition:{duration: duraion, repeat: Infinity, repeatType: "reverse",ease:"linear"},
    },

})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-500 pb-24'>
      <motion.h1 
      whileInView={{ opacity:1, y:0 }}
      initial= {{ opacity:0, y:-100 }}
      transition={{ duration: 1, delay: 0.2,}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div
      whileInView={{ opacity:1, x:0 }}
      initial= {{ opacity:0, x:-100 }}
      transition={{ duration: 1, delay: 0.2,}}
      className='flex flex-wrap justify-center items-center gap-4'>
        <motion.div
        variants={iconVarients(2.5)}
        initial= "initial"
        animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
         variants={iconVarients(3)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <RiTailwindCssFill className='text-7xl text-cyan-600'/>
        </motion.div>
        <motion.div 
         variants={iconVarients(2.5)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <FaBootstrap className='text-7xl text-purple-800'/>
        </motion.div>
        <motion.div 
         variants={iconVarients(3)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <TbBrandMysql className='text-7xl text-blue-600'/>
        </motion.div>
        <motion.div 
         variants={iconVarients(2.5)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div 
         variants={iconVarients(3)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <TbBrandJavascript className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div 
         variants={iconVarients(2.5)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <TbBrandMongodb className='text-7xl text-green-600'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
