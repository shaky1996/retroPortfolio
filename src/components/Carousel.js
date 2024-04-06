import React, { useState } from 'react';
import { barcelona, portfolio, ufit, tvnoise, column } from '../assets';

// Static array of slides - each slide could be a component, a URL to an image, or any other content
const slides = [
    {
        id: 1,
        content: (
            <div className='flex flex-col lg:flex-row p-4 gap-2'>
                <div className='flex'>
                    <img
                        src={barcelona}
                        className='object-cover md:object-cover w-full h-[200px] rounded-xl grayscale-[50%] hover:grayscale-0 '
                        alt='Barcelona'
                    ></img>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <h1>Barcelona</h1>
                    <p className='text-ellipsis'>
                        Responsive one-page HTML website showcasing proficiency
                        in web fundamentals, including HTML, CSS, and
                        JavaScript. Implemented data fetching from an API,
                        demonstrating a comprehensive understanding of core web
                        technologies.
                    </p>
                    <div className='flex flex-row gap-5'>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        content: (
            <div className='flex flex-col lg:flex-row p-4 gap-2 '>
                <div className='flex'>
                    <img
                        src={barcelona}
                        className='object-cover md:object-cover w-full h-[200px] rounded-xl grayscale-[50%] hover:grayscale-0 '
                        alt='Barcelona'
                    ></img>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <h1>Barcelona</h1>
                    <p className='text-ellipsis'>
                        Responsive one-page HTML website showcasing proficiency
                        in web fundamentals, including HTML, CSS, and
                        JavaScript. Implemented data fetching from an API,
                        demonstrating a comprehensive understanding of core web
                        technologies.
                    </p>
                    <div className='flex flex-row gap-5'>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 3,
        content: (
            <div className='flex flex-col lg:flex-row p-4 gap-2'>
                <div className='flex'>
                    <img
                        src={barcelona}
                        className='object-cover md:object-cover w-full h-[200px] rounded-xl grayscale-[50%] hover:grayscale-0 '
                        alt='Barcelona'
                    ></img>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <h1>Barcelona</h1>
                    <p className='text-ellipsis'>
                        Responsive one-page HTML website showcasing proficiency
                        in web fundamentals, including HTML, CSS, and
                        JavaScript. Implemented data fetching from an API,
                        demonstrating a comprehensive understanding of core web
                        technologies.
                    </p>
                    <div className='flex flex-row gap-5'>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        content: (
            <div className='flex flex-col lg:flex-row p-4 gap-2 '>
                <div className='flex'>
                    <img
                        src={barcelona}
                        className='object-cover md:object-cover w-full h-[200px] rounded-xl grayscale-[50%] hover:grayscale-0 '
                        alt='Barcelona'
                    ></img>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <h1>Barcelona</h1>
                    <p className='text-ellipsis'>
                        Responsive one-page HTML website showcasing proficiency
                        in web fundamentals, including HTML, CSS, and
                        JavaScript. Implemented data fetching from an API,
                        demonstrating a comprehensive understanding of core web
                        technologies.
                    </p>
                    <div className='flex flex-row gap-5'>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
            </div>
        )
    }

    // Add as many slides as you have
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-800'>
            <div className='w-full  rounded-xl'>
                <div className='flex flex-col xl:flex-row justify-center'>
                    <div className='flex flex-wrap xl:flex-col items-center justify-center xl:justify-start text-[22px] gap-2 p-4'>
                        {/* Render buttons for each slide */}
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={` relative inline-flex text-2xl h-12 w-24 items-center justify-start overflow-hidden rounded-md border border-black bg-gray-800 px-6 font-medium  transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] ${
                                    currentSlide === index
                                        ? 'text-green-500 translate-x-[3px] translate-y-[3px] [box-shadow:none] '
                                        : 'text-blue-700'
                                }`}
                            >
                                <svg
                                    viewBox='0 0 16 16'
                                    xmlns='http://www.w3.org/2000/svg'
                                    version='1.1'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='1.5'
                                    className='w-full h-full'
                                >
                                    <circle
                                        cx='8'
                                        cy='8'
                                        r='4.25'
                                    ></circle>
                                </svg>
                            </button>
                        ))}
                    </div>
                    {/* Render the current slide's content */}
                    {slides[currentSlide].content}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
