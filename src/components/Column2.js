import React from 'react';
import { technologies } from '../constants/constants';

const Column2 = () => {
    return (
        <div className='flex flex-col col-span-2'>
            <div className='flex flex-col gap-5'>
                <div className='skills-box w-full border-2 border-yellow-500 rounded-xl'>
                    <h1 className='h1-topic-skills text-yellow-200 text-[26px] p-2'>
                        MY TECH STACK
                    </h1>
                   <div className='flex flex-row items-center justify-center p-5 gap-5'>
                   {technologies.map((tech, index) => (
                            <div key={index} className='flex flex-col items-center'>
                                <img src={tech.icon} alt={tech.title} className='w-14 h-14' />
                                <p className='text-md text-yellow-500'>{tech.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='projects-box w-full border-2 border-pink-500 rounded-xl'>
                    <h1 className='h1-topic-projects text-pink-500 text-[26px] p-2'>
                        MY PROJECTS
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Column2;
