import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute aspect-video top-[40%] left-[5%] text-white max-md:hidden'>
      <h1 className='text-6xl'>{title}</h1>
      <h1 className='text-xl w-2/4 py-3'>{overview}</h1>
      <div className='flex py-3'>
        <button className='bg-white text-black px-5 py-3 font-bold text-base rounded-md hover:bg-opacity-65'> Play</button>
        <button className='bg-gray-500 bg-opacity-70 text-white px-5 py-3 font-bold text-base mx-2 rounded-md hover:bg-opacity-75'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
