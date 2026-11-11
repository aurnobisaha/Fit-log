
import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-lime-400"></span>

            <p className="text-sm font-medium text-[#8A92A0]">
                Loading workouts…
            </p>
        </div>
    );
};

export default Loading;
