import { Ilibrary } from "@/types/libraries.type";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface IlibraryCardprops {
    library: Ilibrary;
}

const LibraryCard = ({ library }: IlibraryCardprops) => {
    return (
        <Link
            href={`/libraries/${library.id}`}
            className="block bg-[#20242E] border border-gray-800 rounded-xl overflow-hidden hover:border-lime-400 transition duration-300"
        >
            {/* Image */}
            <div className="w-full h-[145px] bg-[#202127]">
                <Image
                    src={library.image}
                    alt={library.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {library.muscleGroups.map((muscle: string, index: number) => (
                        <span
                            key={index}
                            className="bg-lime-400 text-black text-[10px] font-bold px-2.5 py-1 rounded-full"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="text-white text-sm font-extrabold uppercase mb-1">
                    {library.name}
                </h2>

                {/* Equipment */}
                <p className="text-[#9CA3AF] text-xs mb-3">{library.equipment}</p>

                {/* Workout Details */}
                <div className="border-t border-gray-700 pt-3 flex items-center gap-4 text-gray-400 text-xs">
                    {/* Duration */}
                    <span className="flex items-center gap-1.5">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        {library.duration} min
                    </span>

                    {/* Calories - Flame */}
                    <span className="flex items-center gap-1.5">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M8.5 14.5A4.5 4.5 0 0 0 13 19c2.5 0 4.5-2 4.5-4.5 0-2-1-3.5-2.5-5.5-.5 2-1.5 2.5-1.5 2.5 0-4-2-7-5-9 0 3-1 5-2.5 7C4.5 12 4 13.5 4 15a7 7 0 0 0 14 0" />
                        </svg>
                        {library.caloriesBurned} kcal
                    </span>

                    {/* Rating - Star */}
                    <span className="flex items-center gap-1.5">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z" />
                        </svg>
                        {library.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;