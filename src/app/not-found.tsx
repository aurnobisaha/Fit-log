
import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#000000] px-4 text-center">

            <h1 className="text-8xl font-black text-[#C2F800]">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white">
                PAGE NOT FOUND
            </h2>

            

            <Link
                href="/"
                className="mt-8 rounded-full bg-[#C2F800] px-8 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            >
                Back to Home
            </Link>

        </div>
    );
};

export default NotFound;
