
import AddtoPlanButton from '@/components/WorkoutDetails/AddtoPlanButton';
import { Ilibrary } from '@/types/libraries.type';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import SaveButton from '@/components/WorkoutDetails/SaveButton';

interface IWorkoutsDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getDatas = async (): Promise<Ilibrary[]> => {
    const response = await fetch("http://localhost:3000/Workouts.json");

    if (!response.ok) {
        throw new Error("Failed to fetch workout data");
    }

    const data = await response.json();
    return data;
};

const WorkoutsDetailsPage = async (props: IWorkoutsDetailsPageProps) => {

    console.log("PROPS:", props);

    const { id } = await props.params;

    const libraryData = await getDatas();

    const workout = libraryData.find(
        (library: Ilibrary) => String(library.id) === String(id)
    );

    if (!workout) {
        return (
            <div className="container mx-auto px-6 py-20 text-center text-white">
                <h1 className="text-2xl font-bold">Workout Not Found!</h1>
                <Link href="/libraries" className="btn mt-5">
                    Back to Library
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="card lg:card-side gap-10 bg-transparent">

                <figure className="w-full shrink-0 overflow-hidden rounded-2xl bg-[#202127] lg:w-[380px]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={600}
                        height={700}
                        className="h-full w-full object-cover"
                    />
                </figure>

                <div className="card-body p-0">

                    <h1 className="card-title text-3xl font-extrabold uppercase text-white">
                        {workout.name}
                    </h1>

                    <p className="text-sm text-gray-400">
                        {workout.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle: string, index: number) => (
                            <span
                                key={index}
                                className="badge badge-sm border-none bg-lime-400 font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#151b2b]">
                        <table className="table">
                            <tbody>
                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Equipment</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.equipment}</td>
                                </tr>

                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Difficulty</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.difficulty}</td>
                                </tr>

                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Sets</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.sets}</td>
                                </tr>

                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Reps</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.reps}</td>
                                </tr>

                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Duration</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.duration} min</td>
                                </tr>

                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Calories</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.caloriesBurned} kcal</td>
                                </tr>

                                <tr className="border-gray-800">
                                    <td className="text-xs font-semibold uppercase text-gray-400">Rating</td>
                                    <td className="text-right text-xs font-bold text-white">{workout.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="mt-4 text-sm font-extrabold uppercase text-white">
                        Instructions
                    </h2>

                    <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-300">
                        {workout.instructions.map((step: string, index: number) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>

                    <div className="card-actions mt-4">
                        <AddtoPlanButton workout={workout}  />

                 <SaveButton workout={workout} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutsDetailsPage;
