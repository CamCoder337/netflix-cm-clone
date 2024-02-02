import React from 'react';
import Image from "next/image";

const Hero = ({}) => {

    return(
        <div className="w-full h-screen border border-gray-600 border-b-16">
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col items-center justify-center">
            </div>

            <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center  justify-center gap-4 text-white text-center font-sans">
            <h2 className="xl:text-5xl md:text-4xl font-extrabold z-10">Unlimited movies, TV shows, and more</h2>
            <p className="xl:text-2xl md:text-xl font-medium">Watch anywhere. Cancel anytime.</p>
            <p className="xl:text-xl md:text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex justify-between space-x-2'>
                <input type="email" placeholder="Email address" className="h-[55px] bg-gradient-to-r from-black to-black opacity-45 px-4 py-2 rounded md:w-96 w-80  border border-white" />
                <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300 font-bold text-xl">Get Started &#8594;</button>
            </div>
            </div>
            <Image
                src="/hero.jpg"
                alt="Hero image"
                width={2000}
                height={1225}
                className="w-full h-full object-cover -z-50"
            />
        </div>
    )
};

export default Hero;