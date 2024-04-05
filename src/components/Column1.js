import React from 'react';

const Column1 = () => {
    return (
        <div className=' flex flex-col  justify-center items-center col-span-1'>
            <div className='flex flex-col justify-center items-center lg:border-2 border-sky-500 lg:border-b-0 rounded-md p-4'>
                <div className=''>
                    <div className='pt-4 neon-box border-2  rounded-[50%] text-center  text-yellow-200'>
                        <h1 className='neon-text text-[50px] -rotate-12'>
                            Hello,
                        </h1>
                        <h1 className='neon-text text-[50px] -rotate-12'>
                            I am Shak
                        </h1>
                        <div className='neon-line horizontal-line w-60 h-1 rounded-xl bg-yellow-200 mb-4 -rotate-12'></div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex flex-col items-center '>
                        <h2 className='neon-h2 text-[24px] text-green-200 text-center'>
                            FRONTEND DEVELOPER
                        </h2>
                        <p className='neon-p mt-4 px-0 md:px-8 text-justify break-words text-sky-200'>
                            I'm Shakhzod (or you can call me Shak), a web and mobile developer residing in the
                            suburban area of Philadelphia, PA.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:mt-8 flex flex-col gap-3 lg:px-0 px-4'>
                
                    <button className='neon-linkedin bg-transparent hover:bg-blue-500 hover:text-white text-blue-200 font-bold py-2 px-4 border border-blue-600 rounded-xl'>
                        LinkedIn
                    </button>
                    <button className='neon-github bg-transparent hover:bg-green-500 text-green-200 font-bold py-2 px-4 border border-green-400 rounded-xl'>
                        Github
                    </button>
                    <button className='neon-resume bg-transparent hover:bg-pink-500 text-pink-200  font-bold py-2 px-4 border border-fuchsia-400 rounded-xl'>
                        Resume
                    </button>
                </div>
            </div>
        
    );
};

export default Column1;
