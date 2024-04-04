import React from 'react'

const Column1 = () => {
  return (
    <div className='flex flex-col border-2 border-red-500'> Column1
    <div>Head</div>



    <div className='flex flex-row gap-5 justify-center mt-5 '>
        <button className='bg-transparent hover:bg-blue-700 hover:text-white text-blue-700 font-bold py-2 px-4 border border-gray-400 rounded'>LinkedIn</button>
        <button className='bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-gray-400 rounded'>Github</button>
        </div>



    <div>
        <button className='mt-5 bg-transparent hover:bg-white text-yellow-200 hover:text-black font-bold py-2 px-4 border border-gray-400 rounded'>Check My Resume</button>
        </div>
    </div>
  )
}

export default Column1