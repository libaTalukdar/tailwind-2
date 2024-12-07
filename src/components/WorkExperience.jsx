import React from 'react'
import { EXPERIENCES } from '../assets/constant'

const WorkExperience = () => {
  return (
    <div className='pt-10'id='work'>
        <h2 className='text-center text-4xl font-semibold tracking-tighter '>
 Work Experience
        </h2>
        <div className='space-y-8 p-10'>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='rounded-xl border border-gray-700 bg-green-950 p-4'>
               <h3 className='text-2xl font-semibold'>
                {experience.title}
               </h3>
               <p className='text-xl'>
                {experience.company}
               </p>
               <p className='text-sm '>{experience.duration}</p>
               <p className='mt-2 text-base'>{experience.description}</p>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default WorkExperience
