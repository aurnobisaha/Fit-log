
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { Ilibrary } from "@/types/libraries.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddtoPlanButton = ({ workout }: { workout: Ilibrary }) => {

    const { plan, setPlan } = useContext(LibraryContext);
    


    const handleAddToPlan = () => {
          if (plan.some((item: Ilibrary) => item.id === workout.id)) {
        toast.warning("Workout already added!");
        return;
    }

    if (plan.length >= 5) {
        toast.warning("You can add maximum 5 workouts!");
        return;
    }
        //console.log("Add to plan button clicked", workout);
        setPlan([...plan, workout]);
        toast.success(`You have added "${workout.name}" to your add list`);
    };

    return (
        <button
            className="btn border-none bg-lime-400 font-bold text-black hover:bg-lime-300"
            onClick={() => handleAddToPlan()}
        >
            Add to today&apos;s plan
        </button>
    );
};

export default AddtoPlanButton;
