import React from 'react';
import Image from "next/image";
import banner from "@/assets/banner.png"

const Banner = () => {
    return (
        <section className="bg-[#000000] px-4 sm:px-6 py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border border-[#222630] bg-[#1F232B] px-6 sm:px-12 py-10 md:py-16">
            <div>
                <p className='text-[#C2F800] text-[10px] font-bold tracking-widest mb-5'>WORKOUT LIBRARY</p>
                <h2 className='text-[#FFFFFF] text-4xl sm:text-5xl font-black leading-[1.05]'>TRAIN WITH INTENT. LOG 
                <br />EVERY SET.</h2>
                <p className='text-[#9CA3AF] text-sm mt-5 max-w-lg leading-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.</p>
<button className='text-[#000000] bg-[#C2F800] btn btn-active btn-success font-bold text-xs mt-6'>BROWSE WORKOUTS</button>

            </div>
            <div className="flex justify-center md:justify-end">
<Image src={banner} alt="Banner" width={500} height={500} />
            </div>
        </div>
        </section>
       
    );
};

export default Banner;