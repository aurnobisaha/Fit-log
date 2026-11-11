





import React from 'react';
import ListedWorkouts from '@/app/listed-workouts/page';

const MyPlanPage = () => {
    return (
        <div className="container mx-auto  py-[60px] px-6">
            <h2 className="text-2xl font-black text-[#FFFFFF] mb-1 uppercase">
                MY PLAN
            </h2>
            <p className="text-[#8A92A0] text-sm ">
                Cap of five lifts for today. Finish them, then load more.
            </p>
            <div className="mt-8 grid grid-cols-3 rounded-2xl border border-white/10 bg-white/5 p-6">
  <div>
    <p className="text-sm text-[#8A92A0]">Exercises</p>
    <p className="text-4xl font-black text-[#CCFF00]">2</p>
  </div>

  <div className=" pl-6">
    <p className="text-sm text-[#8A92A0]">Minutes</p>
    <p className="text-4xl font-black text-[#FFFFFF]">23</p>
  </div>

  <div className="pl-6">
    <p className="text-sm text-[#8A92A0]">Calories</p>
    <p className="text-4xl font-black text-[#FFFFFF]">190</p>
  </div>
</div>
            <ListedWorkouts />
        </div>
    );
};

export default MyPlanPage;
/*import React from "react";
import LibraryCard from "@/components/shared/libraryCard";
import { Ilibrary } from "@/types/libraries.type";

const getDatas = async () => {
    const response = await fetch("http://localhost:3000/Workouts.json");
    const data = await response.json();
    return data;
};

const Libraries = async () => {
    const libraryData = await getDatas();

    return (
        <section className="container mx-auto max-w-6xl my-16 px-4">

            <h1 className="text-2xl font-bold text-white mb-1 uppercase">
                The Library
            </h1>

            <p className="text-gray-400 text-sm mb-7">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                {libraryData.map((library: Ilibrary, ind: number) => (
                    <LibraryCard
                        key={library.id || ind}
                        library={library}
                    />
                ))}

            </div>
        </section>
    );
};

export default Libraries;*/