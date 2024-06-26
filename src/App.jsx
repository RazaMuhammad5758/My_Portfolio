import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (

    
    
    <div className='overflow-x-hidden text-neutral-300 antialiased bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]'>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 "></div>
      
      
      <div className='container mx-auto px-8'>
      <NavBar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
