import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center' >
                <div className='flex space-x-4 cursor-pointer'> 
                <a className='list-none' href="https://web.facebook.com/profile.php?id=100076248957181"><FaFacebook size={24}/> </a>
                <a className='list-none' href="https://www.instagram.com/aftabahmed8647/"><FaInstagram size={24}/></a> 
                <a className='list-none' href="https://github.com/Aftab-Ahmed1234"><FaGithub  size={24}/> </a> 
                <a className='list-none' href="https://www.linkedin.com/notifications/?filter=all"><FaLinkedin size={24}/> </a>
                </div>
                <div className='mt-8 pt-8 border-t border-gray-700 flex flex-col items-center'>
                    <p className='text-sm'>
                        &copy; 2024 Sukkur IBA University. All rights Reserved.
                    </p>
                    <p className='text-sm'>Supportive Partner ❤️ Faizi</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
