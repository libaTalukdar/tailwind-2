import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../assets/constant'


const Footer = () => {
  return (
    <div className='mb-8 mt-10'>
        <div className="flex items-center justify-center">
            <img src={logo} alt="" className='w-12 h-12 my-10'/>

        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index)=>(
               <a key={index} href={link.href} target='blank' rel='noopener noreferrer'>
                {link.icon}
               </a>
            ))}

        </div>
        <p className='mt-8 text-center text-sm'>
         &copy;liba All right reserved by liba
        </p>
      
    </div>
  )
}

export default Footer
