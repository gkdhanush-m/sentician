import React from 'react'

function HomeComponents({ imgUrl, imgAlt, heading, para }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center p-4 flex-1">
            {/* Icon should always be at the top */}
            <div className="bg-custom-light-blue flex justify-center items-center h-28 w-28 md:h-32 md:w-32 p-6 md:p-8 rounded-full">
                <img className="max-w-full h-auto filter brightness-0 invert" src={imgUrl} alt={imgAlt} />
            </div>

           <div className='flex flex-1'>
                <h1 className="font-bold text-lg md:text-xl text-center mt-4">{heading}</h1>
           </div>

            {/* Ensuring heading and text remain even */}
            <div className="flex flex-col items-center">
                <p className="text-custom-black text-base text-center mt-2 px-4">{para}</p>
            </div>
        </div>
    );
}




export default HomeComponents