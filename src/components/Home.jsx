import React from 'react';
import { FaSquareFacebook, FaLinkedin, FaSquareGithub, FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiMongodb, SiExpress, SiVercel } from 'react-icons/si';
import { ReactTyped } from 'react-typed';
import pic from '../assets/Aftab.avif';

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
        
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my Portfolio</span>
            <div className="flex space-x-3 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={['Developer', 'Programmer', 'Coder']}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              As a Computer Science graduate from Sukkur IBA University with expertise in front-end web development
              and machine learning, I am eager to leverage my technical skills and innovative mindset in a professional
              setting. My passion for continuous learning and creative problem-solving drives me to deliver impactful
              solutions.
            </p>
            <br />
         
            <div className="flex flex-col md:flex-row items-center justify-between">
             
              <div className="space-y-1">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://web.facebook.com/profile.php?id=100076248957181" target="_blank" rel="noopener noreferrer">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/aftab-ahmed-6626b2288/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://vercel.com/aftabahmed12345s-projects" target="_blank" rel="noopener noreferrer">
                      <SiVercel className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Aftab-Ahmed1234" target="_blank" rel="noopener noreferrer">
                      <FaSquareGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
             
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2" />
                  <SiExpress className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2" />
                  <FaReact className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2" />
                  <FaNodeJs className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2" />
                </div>
              </div>
            </div>
          </div>

        
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8">
            <img src={pic} className="rounded-full md:h-[450px] md:w-[450px]" alt="Aftab Ahmed" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
