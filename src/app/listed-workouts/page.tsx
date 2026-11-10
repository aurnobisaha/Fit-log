'use client';
import React,{useContext} from 'react';
import { LibraryContext } from '@/context/LibraryContext';

const ListedWorkouts = () => {
    const  {plan, saved} = useContext(LibraryContext);
    console.log( plan,saved,"Plan from context:","savelist");
    
    return (
        <div>
            
        </div>
    );
};

export default ListedWorkouts;