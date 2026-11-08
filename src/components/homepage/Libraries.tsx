
import React from "react";
import LibraryCard from "../shared/libraryCard";
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

export default Libraries;
















