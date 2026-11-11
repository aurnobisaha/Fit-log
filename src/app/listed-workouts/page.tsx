
'use client';

import React, { useContext, useState } from 'react';
import { LibraryContext } from '@/context/LibraryContext';
import LibraryCard from '@/components/shared/libraryCard';
import { Ilibrary } from '@/types/libraries.type';
import Link from "next/link";

const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-xl font-black text-[#FFFFFF]">
            NOTHING HERE YET
        </h2>

        <p className="mt-2 text-sm text-[#8A92A0]">
            Browse the library and add a lift to get today moving.
        </p>

        <Link
            href="/"
            className="mt-8 rounded-full bg-[#C2F10D] px-8 py-3 text-sm font-semibold text-[#000000] shadow-lg shadow-lime-400/30 transition hover:bg-lime-300"
        >
            Go to workouts
        </Link>
    </div>
);

const ListedWorkouts = () => {

    const { plan, saved } = useContext(LibraryContext) as any;

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    const totalExercises = plan.length;

    const totalMinutes = plan.reduce(
        (total: number, item: Ilibrary) => total + item.duration, 0
    );

    const totalCalories = plan.reduce(
        (total: number, item: Ilibrary) => total + item.caloriesBurned, 0
    );

    const sortWorkouts = (workouts: Ilibrary[]) => {
        return [...workouts].sort((a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            return a.rating - b.rating;
        });
    };

    return (
        <div className="container mx-auto px-4 py-[60px]">

            <div>
                <h2 className="text-3xl font-bold text-white">MY PLAN</h2>

                <p className="mt-2 text-sm text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="mt-4 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#232732] p-6">

                <div>
                    <p className="text-sm text-gray-400">Exercises</p>
                    <p className="text-4xl font-bold text-lime-400">
                        {totalExercises}
                    </p>
                </div>

                <div className="pl-6">
                    <p className="text-sm text-gray-400">Minutes</p>
                    <p className="text-4xl font-bold text-[#FFFFFF]">
                        {totalMinutes}
                    </p>
                </div>

                <div className="pl-6">
                    <p className="text-sm text-gray-400">Calories</p>
                    <p className="text-4xl font-bold text-[#FFFFFF]">
                        {totalCalories}
                    </p>
                </div>

            </div>

            {/* Tabs and Sort By */}
            <div className="mt-8 flex items-center justify-between gap-4">

                <div className="flex w-fit rounded-xl border border-white/10 bg-white/5 p-1 text-sm shrink-0">

                    <button
                        onClick={() => setActiveTab('plan')}
                        className={`rounded-lg px-4 py-2 ${activeTab === 'plan' ? 'bg-white/10 font-bold text-[#FFFFFF]' : 'text-[#8A92A0]'}`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-lg px-4 py-2 ${activeTab === 'saved' ? 'bg-white/10 font-bold text-[#FFFFFF]' : 'text-[#8A92A0]'}`}
                    >
                        Saved
                    </button>

                </div>

                <div className="flex items-center gap-2 shrink-0">

                    <span className="text-xs text-[#8A92A0] whitespace-nowrap">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
                        className="select select-sm bg-[#151820] border border-white/10 text-white rounded-lg"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>

                </div>

            </div>

            {/* Today's Plan list */}
            {activeTab === 'plan' && (
                <div className="mt-6 min-h-[300px] rounded-2xl border border-white/10 bg-white/5 p-6">

                    <div className="grid grid-cols-1 gap-3">

                        {
                            plan.length > 0 ?
                                sortWorkouts(plan).map((item: Ilibrary) => (
                                    <LibraryCard
                                        key={item.id}
                                        library={item}
                                        showActions={true}
                                        isPlan={true}
                                        horizontal={true}
                                    />
                                ))
                                : <EmptyState />
                        }

                    </div>

                </div>
            )}

            {/* Saved list */}
            {activeTab === 'saved' && (
                <div className="mt-6 min-h-[300px] rounded-2xl border border-white/10 bg-white/5 p-6">

                    <div className="grid grid-cols-1 gap-3">

                        {
                            saved.length > 0 ?
                                sortWorkouts(saved).map((item: Ilibrary) => (
                                    <LibraryCard
                                        key={item.id}
                                        library={item}
                                        showActions={true}
                                        horizontal={true}
                                    />
                                ))
                                : <EmptyState />
                        }

                    </div>

                </div>
            )}

        </div>
    );
};

export default ListedWorkouts;













