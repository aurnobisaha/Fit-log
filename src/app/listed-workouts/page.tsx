
'use client';
import React,{useContext} from 'react';
import { LibraryContext } from '@/context/LibraryContext';
import LibraryCard from '@/components/shared/libraryCard';
import { Ilibrary } from '@/types/libraries.type';
import Link from "next/link";

const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-xl font-black text-[#FFFFFF]">NOTHING HERE YET</h2>
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
    const {plan, saved} = useContext(LibraryContext);

    return (
        <div className="container mx-auto px-4 py-[60px]">

            <div className="tabs tabs-box w-fit">

                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab text-[#8A92A0] checked:text-[#FFFFFF] checked:font-bold"
                    aria-label="Today's Plan"
                    defaultChecked
                />

                <div className="tab-content mt-6 w-full">
                    <div className="min-h-[300px] rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                plan.length > 0 ?
                                plan.map((item: Ilibrary) => {
                                    return <LibraryCard key={item.id} item={item} />;
                                })
                                : <EmptyState />
                            }
                        </div>
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab text-[#8A92A0] checked:text-[#FFFFFF] checked:font-bold"
                    aria-label="Saved"
                />

                <div className="tab-content mt-6 w-full">
                    <div className="min-h-[300px] rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                saved.length > 0 ?
                                saved.map((item: Ilibrary) => {
                                    return <LibraryCard key={item.id} item={item} />;
                                })
                                : <EmptyState />
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedWorkouts;
