
"use client";

import { Ilibrary } from "@/types/libraries.type";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { LibraryContext } from "@/context/LibraryContext";
import { toast } from "react-toastify";

interface IlibraryCardprops {
    library: Ilibrary;
    showActions?: boolean;
    isPlan?: boolean;
    horizontal?: boolean;
}

const LibraryCard = ({
    library,
    showActions = false,
    isPlan = false,
    horizontal = false
}: IlibraryCardprops) => {

    const {
        plan,
        setPlan,
        saved,
        setSaved,
        completed,
        setCompleted
    } = useContext(LibraryContext) as any;

    const handleRemove = () => {
        if (isPlan) {
            setPlan(plan.filter((item: Ilibrary) => item.id !== library.id));
        } else {
            setSaved(saved.filter((item: Ilibrary) => item.id !== library.id));
        }

        toast.success("Workout removed successfully!");
    };

    const handleDone = () => {
        if (completed.some((item: Ilibrary) => item.id === library.id)) {
            toast.info("Workout already completed!");
            return;
        }

        setCompleted([...completed, library]);
        toast.success("Workout marked as done!");
    };

    return (
        <div className={`bg-[#20242E] border border-gray-800 rounded-xl overflow-hidden hover:border-lime-400 transition duration-300 ${horizontal ? "flex flex-col sm:flex-row sm:items-center" : ""}`}>

            <Link
                href={`/libraries/${library.id}`}
                className={horizontal ? "block shrink-0" : "block"}
            >
                <div className={`${horizontal ? "w-full sm:w-[180px] h-[145px] sm:h-[120px]" : "w-full h-[145px]"} bg-[#202127]`}>
                    <Image
                        src={library.image}
                        alt={library.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>

            <div className={`p-4 ${horizontal ? "flex-1 min-w-0" : ""}`}>

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

                <Link href={`/libraries/${library.id}`}>
                    <h2 className="text-white text-sm font-extrabold uppercase mb-1">
                        {library.name}
                    </h2>
                </Link>

                <p className="text-[#9CA3AF] text-xs mb-3">
                    {library.equipment}
                </p>

                <div className="border-t border-gray-700 pt-3 flex flex-wrap items-center gap-4 text-gray-400 text-xs">

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

            {showActions && (
                <div className={`flex items-center gap-2 p-4 ${horizontal ? "sm:pr-5 sm:pl-0 shrink-0" : "pt-0"}`}>

                    <Link
                        href={`/libraries/${library.id}`}
                        className="btn btn-sm bg-white/10 text-white border-none"
                    >
                        View Details
                    </Link>

                    {isPlan && (
                        <button
                            onClick={handleDone}
                            className="btn btn-sm  bg-lime-400 text-black border-none hover:bg-lime-300 "
                        >
                            Mark as Done
                        </button>
                    )}

                    <button
                        onClick={handleRemove}
                        className="btn btn-ghost btn-error text-white"
                    >
                        X
                    </button>

                </div>
            )}

        </div>
    );
};

export default LibraryCard;



