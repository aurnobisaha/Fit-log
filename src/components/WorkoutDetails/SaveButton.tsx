
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { Ilibrary } from "@/types/libraries.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: Ilibrary }) => {

    const { saved, setSaved} = useContext(LibraryContext);
    


    const handleSavelist = () => {
        console.log("Save button clicked", workout);
        setSaved([...saved, workout]);
        toast.success(`You have added "${workout.name}" to your save list`);
    };

    return (
        <button
            className="btn border-none bg-lime-400 font-bold text-black hover:bg-lime-300"
            onClick={() => handleSavelist()}
        >
            Save for later
        </button>
    );
};

export default SaveButton;