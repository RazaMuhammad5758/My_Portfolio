import project1 from "../source/projects/project-1.jpg";
import project2 from "../source/projects/project-2.jpg";
import project3 from "../source/projects/project-3.jpg";
import project4 from "../source/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like HTML, CSS, SCSS, TailwindCSS, Bootstrap, JavaScript and Reactjs, as well as back-end technologies like  MySQL and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including HTML, CSS, SCSS, TailwindCSS, Bootstrap, JavaScript, Reactjs, Material UI and Framer Motion. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Senior Front-end Developer",
    company: "CodeAlpha",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, TailwindCSS and Bootstrap. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Bootstrap", "TailwindCSS", "Material UI" ],
  },
  {
    year: "2024",
    role: "Front-end Developer",
    company: "CodeClause",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, Javascript and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Bootstrap", "TailwindCSS", "MaterialUI"],
  },
  
];

export const PROJECTS = [
  {
    title: "Resturant Website",
    image: project1,
    description:
      "A fully functional restaurant website with features like menu listing, order, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://lachine-chain.netlify.app"
  },
  {
    title: "Business Website",
    image: project2,
    description:
      "An application for barber shop, with features such as booking, select designs, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://barberx.vercel.app"
  },
  
  {
    title: "Machine Learning Application",
    image: project4,
    description:
      "A platform to detect plant diseases and predict crop yield using machine learning models.",
    technologies: ["HTML", "CSS", "Reactjs" , "Vue.js", "Express", "mySQL"],
    Link: "mymlapp.vercel.app"
    
  },
];

export const CONTACT = {
  address: "Muzaffarabad Colony, Landhi Karachi, Pakistan ",
  phoneNo: "+92 342 2475758 ",
  email: "razamd7714@gmail.com",
};
