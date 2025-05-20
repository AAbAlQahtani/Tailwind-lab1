import React from 'react'

export default function Hero() {
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-gray-100  md:h-64 flex flex-col sm:flex-row items-center justify-center text-center gap-4 md:gap-44">
                    <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold mt-10 md:mt-0'>WOODEN MINIMALISTIC CHAIRS</h1>
                    <p className='text-gray-600 mb-2'>Sale Up To</p>
                    <h1 className='text-green-600 text-xl font-bold'>40% off</h1>
                    <button className="bg-yellow-400 px-4 py-2 rounded font-medium text-sm w-2xs">shop now</button>
                    </div>
                    <div>
                        <img src="https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png" width={"200"} alt="" />
                    </div>
                </div>



                <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center ">
                    <h1 className='text-xl'>PACK 5 T-SHIRTS FOR SUMMER</h1>
                    <p className=''>Starting at <span className='text-red-500'>9.34</span></p>
                    <img src="https://www.pngplay.com/wp-content/uploads/13/Pngimg-PNG-Images-HD.png" width={80} alt="" />
                </div>
            </div>
        </>
    )
}
