import React from 'react';
import Image from "next/image";

const HeaderComp = ({}) => {

    return(
        <header className="w-full">
          <div className="flex items-center justify-between w-full pr-4 text-white py-6">
            <Image
                src="/netflix-logo.png"
                alt="Netflix Logo"
                className="dark:invert mr-4 object-fit flex-shrink-0"
                width={150}
                height={72}
                priority
            />
            <button className='font font-semibold text-md bg-red-600 px-4 py-2 rounded flex-shrink-0 hover:bg-red-700 transition-colors duration-300'>
                Sign In
            </button>
</div>

        </header>
    )
};

export default HeaderComp;