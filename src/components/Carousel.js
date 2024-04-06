import React, { useState } from 'react';
import { barcelona, portfolio, ufit, tvnoise } from '../assets';

// Static array of slides - each slide could be a component, a URL to an image, or any other content
const slides = [
  {
    id: 1,
    content: <div className='flex flex-col lg:flex-row p-4 gap-2 lg:gap-40 '>

        <div className='flex flex-col items-start'>
            <h1>Barcelona</h1>
            <p>asdasdasdasdasdasdasdasdasd</p>
        </div>
        <div className='tv flex justify-end'>
        <img src={barcelona} className='object-fill w-full h-[200px] rounded-xl grayscale-[50%] hover:grayscale-0 '></img>
        
        </div>
    </div>
  },
  {
    id: 2,
    content: <div className='flex flex-col lg:flex-row p-4 gap-2 lg:gap-40'>

    <div className='flex flex-col items-start'>
        <h1>uFit</h1>
        <p>asdasdasdasdasdasdasdasdasd</p>
    </div>
    <div className='flex justify-end'>
    <img src={ufit} className='object-fill w-full h-[200px] rounded-xl grayscale-[50%] hover:grayscale-0'></img>
    </div>
</div>
  },
  {
    id: 3,
    content: <div>Slide 3 Content</div>,
  },
  // Add as many slides as you have
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
        <div className='flex flex-row w-full bg-black  text-[32px] '>
      <button onClick={prevSlide} className="arrow p-4 hover:text-yellow-500">
        {'<<'}
        
      </button>
      <button onClick={nextSlide} className="arrow p-4 hover:text-yellow-500">
      {'>>'}
        
      </button>
      </div>
      <div className="w-full bg-black rounded-xl">
        <div className="flex justify-around">
          {/* Render the current slide's content */}
          {slides[currentSlide].content}
        </div>
      </div>

    </div>
  );
};

export default Carousel;
