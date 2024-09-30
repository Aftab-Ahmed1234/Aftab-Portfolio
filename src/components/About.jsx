import React from 'react'

function About() {
  return (
    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p className='text-justify text-sm'>As a Computer Science graduate from Sukkur IBA University with expertise in front-end web development and machine learning, I am eager to
        leverage my technical skills and innovative mindset in a professional setting. Whether as an intern or in a full-time role, my passion for
        continuous learning and creative problem-solving drives me to deliver impactful solutions. I am excited to bring fresh perspectives, energy, and
        dedication to your organization, contributing to its growth while advancing my career. </p>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Education</h1>
        <span>
            <h2 className='font-bold'>Sukkur IBA University</h2>
            <p className='text-sm'>Bachelor of Computer Science</p>
            <p className='text-xs'>Aug 2020 - Aug 2024</p>
            <br />
            <h2 className='font-bold'>Syed Noor Muhammad Shah Degree College Tharushah</h2>
            <p className='text-sm'>Intermediate in Pre-engineering</p>
            <p className='text-xs'>Jun 2017 - Oct 2019</p>
         
        </span>
        <br />
        <h1 className='text-green-500 font-semibold text-xl'> Skills and Expertise </h1>
        <span className='text-sm'>
        HTML5 | CSS3 | Tailwind CSS | Bootstrap5
        | ES6+/JavaScript | Material UI | ReactJS |
        Fetch API /AJAX | State Management |
        DOM Manipulation | UI/UX Design | API
        Integration | Miro Board | Figma Design |
        Notion
        </span>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'> Other Skills </h1>
        <span className='text-sm'>
        C++ | Java | Python | Machine Learning | Node.js |
        MongoDB | Kolten | Flutter | Docker | Kubernetes |
        Teamwork & Collaboration | Problem-Solving | Effective
        Communication
        </span>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'> Certifications </h1>
        <span>
         <h2 className='font-bold'>Certificate From IBM</h2>
         <p className='text-xs'>6 March, 2023</p>
         <p className='text-xs'>Python for Data Science, AI & Development</p>
        </span>
        <br />
        <br />
      </div>
    </div>

    </>

  )
}

export default About
