
"use client";
import React, { createContext, ReactNode, useState } from 'react';
import { Ilibrary } from '@/types/libraries.type';

interface ILibraryContext {
    plan: Ilibrary[];
    setPlan: React.Dispatch<React.SetStateAction<Ilibrary[]>>;
    saved: Ilibrary[];
    setSaved: React.Dispatch<React.SetStateAction<Ilibrary[]>>;
    completed: Ilibrary[];
    setCompleted: React.Dispatch<React.SetStateAction<Ilibrary[]>>;
}

export const LibraryContext = createContext<ILibraryContext >({} as ILibraryContext);

const LibraryProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Ilibrary[]>([]);
    const [saved, setSaved] = useState<Ilibrary[]>([]);
    //const [message, setMessage] = useState("");
    const [completed, setCompleted] = useState<Ilibrary[]>([]);

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved,
        //message,
        //setMessage
        completed,
        setCompleted
    };

    return (
        <LibraryContext.Provider value={sharedData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;
