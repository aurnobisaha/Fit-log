'use client';
import React,{useContext} from 'react';
import { LibraryContext } from '@/context/LibraryContext';

const ListedWorkouts = () => {
    const  {plan} = useContext(LibraryContext);
    console.log("Plan from context:", plan);
    return (
        <div>
            
        </div>
    );
};

export default ListedWorkouts;