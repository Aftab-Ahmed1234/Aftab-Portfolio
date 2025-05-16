import React from 'react';
import portfolio from '../../public/portfolio -web.png';
import figma from '../../public/figma.png';
import Cara from '../../public/Cara.png'
import Grace_Shop from '../../public/Grace_Shop.png';
import Feedback_App from '../../public/Feedback_App.png';
import java from '../../public/Java-Logo.png';

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: portfolio,
      name: "Portfolio",
      text:"This is my personal portfolio i created for the showcase my past present and future projects ",
      Deployed_link: " https://aftab-portfolio-five.vercel.app/",
      GitHub_link:" https://github.com/Aftab-Ahmed1234/Aftab-Portfolio",
      
    },
    {
      id: 2,
      logo: figma,
      name: "My Website",
      text:"This is my website I have created for hands on experience",
      Deployed_link: " https://figma-to-html123.vercel.app/",
      GitHub_link:" https://github.com/Aftab-Ahmed1234/Figma-to-HTML",
    },
    {
      id: 3,
      logo: Cara,
      name: "Cara E-commerce web",
      text:"This is Online Bakery Where you can make online order for cake or sweet",
      Deployed_link: "https://amazing-genie-f0e8d3.netlify.app/",
      GitHub_link:" https://github.com/Aftab-Ahmed1234/cara-e-commerce-website",
    },
    {
      id: 4,
      logo: Grace_Shop,
      name: "Grace Shop",
      text:"This is Shopping E-Commerce Website with fetch API where from you can bay online thing Like dress, paint shoes, bag etc. ",
      Deployed_link: " https://grace-shop.vercel.app/",
      GitHub_link:" https://github.com/Aftab-Ahmed1234/Grace-Shop",
    },
    {
      id: 5,
      logo: Feedback_App,
      name: "Feedback App",
      text:"Developed a dark-themed feedback system UI with features including a rating system, review input, review management, and real-time average rating display ",
      Deployed_link: "https://feeback-app-ruddy.vercel.app/",
      GitHub_link:" https://github.com/Aftab-Ahmed1234/Feeback-App",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      text:"This is my personal portfolio i created for the showcase my past present and future projects ",
      Deployed_link: " https://aftab-portfolio-five.vercel.app/",
      GitHub_link:" https://github.com/Aftab-Ahmed1234/Aftab-Portfolio",
     
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5"> {/* Increased gap from 3 to 8 */}
          {cardItem.map(({ id, logo, name,text, Deployed_link,GitHub_link }) => (
            <div
              className="md:w-[295px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                className="w-[300px] h-[120px] p-1 border-[2px]"
                src={logo}
                alt=""
              />
              <div>
                <div className="font-bold text-xl mb-2 px-2 pt-2">{name}</div>
                <p className="px-2 text-gray-700 text-xs">{text}</p>
                <div className="px-6 py-4 space-x-5 justify-around">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded ">
                    <a className='list-none' href={Deployed_link}>Deployed Link</a>
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    <a className='list-none' href={GitHub_link}>GitHub</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
