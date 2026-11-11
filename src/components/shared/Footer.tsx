
import React from 'react';
import Link from 'next/link';
import logo from "@/assets/logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#000000] border-t border-white/10 px-4 py-8">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <Link href="/" className="flex items-center gap-2">
                   <Image src={logo} alt="Logo" width={26} height={26} />

                    <span className="text-xl font-black  text-[#FFFFFF]">
                        FITLOG
                    </span>
                </Link>

                <p className="text-center text-sm text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
