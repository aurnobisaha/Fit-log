"use client";
import React ,{ createContext,ReactNode, useState } from 'react';
export const LibraryContext = createContext({});
const LibraryProvider = ({children}: {children: ReactNode}) => {
    const [plan, setPlan] = useState([]);
const [saved, setSaved] = useState([]);
//const [message, setMessage] = useState("");

const sharedData={
    plan,
    setPlan,
    saved,
    setSaved,
    //message,
    //setMessage
}
return <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>;
        
    
};

export default LibraryProvider;