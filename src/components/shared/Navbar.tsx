
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
    return (
        <div className="navbar min-h-[72px] bg-[#000000] border-b border-[#1C1F26] px-4 sm:px-6 text-[#FFFFFF]">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-[#1E1E1E] rounded-box border border-[#1C1F26] z-50 mt-3 w-52 p-2 shadow">

                        <li>
                            <Link href="/" className="text-[#C2F800]">
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link href="/my-plan" className="text-[#9CA3AF]">
                                My Plan
                            </Link>
                        </li>

                    </ul>
                </div>

               
                <div className="flex gap-2 items-center">
                    <Image src={logo} alt="Logo" width={26} height={26} />
                    <p className="font-bold text-lg text-[#FFFFFF]">
                        FITLOG
                    </p>
                </div>
            </div>

         
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">

                    <li>
                        <Link href="/" className="text-[#C2F800] rounded-full font-medium text-xs px-4 py-1.5 bg-[#1A2312]">
                            Workouts
                        </Link>
                    </li>

                    <li>
                        <Link href="/my-plan" className="text-[#9CA3AF] rounded-full font-medium text-xs px-4 py-1.5">
                            My Plan
                        </Link>
                    </li>

                </ul>
            </div>

          
            <div className="navbar-end gap-3 sm:gap-6">

               
                <Link href="/my-plan" className="flex items-center gap-2">
                    <span className="text-xs text-[#D1D5DB]">Plan</span>

                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[10px] font-bold text-[#000000]">
                        0
                    </span>
                </Link>

             
                <Link href="/my-plan" className="flex items-center gap-2">
                    <span className="text-xs text-[#9CA3AF]">Saved</span>

                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2D313B] text-[10px] text-[#9CA3AF]">
                        0
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;

