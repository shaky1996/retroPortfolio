import React from 'react';
import { technologies } from '../constants/constants';

const Column2 = () => {

    const techGroups = [
        technologies.slice(0, 3),
        technologies.slice(3, 6),
        technologies.slice(6, 10)
    ];

    
    return (
        <div className='flex flex-col col-span-2'>
            <div className='flex flex-col gap-5'>
                <div className='skills-box w-full border-2 border-yellow-500 rounded-xl'>
                    <h1 className='h1-topic-skills text-yellow-200 text-[26px] p-5 text-center lg:text-left'>
                        MY TECH STACK
                    </h1>
                   <div className='flex flex-col lg:flex-row justify-evenly p-5 gap-5'>
                   {techGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className='flex flex-col gap-3'>
                                {group.map((tech, index) => (
                                    <div key={index} className='flex flex-col'>
                                        
                                        <p className='skills-text text-2xl text-yellow-500'>{tech.title}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='projects-box w-full border-2 border-pink-500 rounded-xl'>
                    <h1 className='h1-topic-projects text-pink-500 text-[26px] p-5'>
                        MY PROJECTS
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Column2;
