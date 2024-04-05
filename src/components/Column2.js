import React from 'react';
import { technologies } from '../constants/constants';
import Carousel from './Carousel';

const Column2 = () => {

    const techGroups = [
        technologies.slice(0, 3),
        technologies.slice(3, 6),
        technologies.slice(6, 10)
    ];

    
    return (
        <div className='flex flex-col col-span-1 lg:col-span-2 mt-5 md:mt-0'>
            <div className='flex flex-col gap-5'>
                <div className='skills-box w-full border-2 border-yellow-500 rounded-xl'>
                    <h1 className='h1-topic-skills text-yellow-200 text-[26px] p-5 text-center lg:text-left'>
                        MY TECH STACK
                    </h1>
                   <div className='flex flex-col md:flex-row justify-evenly p-5 gap-3 items-center md:items-start'>
                   {techGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className='flex flex-col gap-3 '>
                                {group.map((tech, index) => (
                                    <div key={index} className='flex flex-col items-center md:items-start'>
                                        
                                        <p className='skills-text text-lg lg:text-2xl text-yellow-500 text-center'>{tech.title}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='projects-box w-full border-2 border-pink-500 rounded-xl'>

                    <div>
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Column2;
