import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-20  w-3/4 items-center bg-gray-100 rounded-4xl my-10 shadow'>
        <div className='w-70'>
            <h1 className='font-bold mt-10 md:mt-0'>Bose Bluetooth wireless headphines</h1>
            <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque officii</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-green-600 text-xl font-bold'>216$</h1>
            <button className="bg-yellow-400 px-4 py-2 rounded font-medium text-sm">shop now</button>
        </div>
        <div>
            <img src="https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png" width={"200"} alt="" />
        </div>


    </div>
    </div>
    
    </>
  )
}
