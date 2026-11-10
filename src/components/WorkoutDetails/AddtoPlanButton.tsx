
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { Ilibrary } from "@/types/libraries.type";
import React, { useContext } from "react";

const AddtoPlanButton = ({ workout }: { workout: Ilibrary }) => {

    const { plan, setPlan } = useContext(LibraryContext);
    


    const handleAddToPlan = () => {
        console.log("Add to plan button clicked", workout);
        setPlan([...plan, workout]);
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
