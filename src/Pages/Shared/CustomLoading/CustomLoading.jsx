import React from 'react';
import { PulseLoader } from "react-spinners";
const CustomLoading = () => {
    return (
        <div className="min-h-screen items-center justify-center flex">
            <PulseLoader color="#36d7b7" />
        </div>
    );
};

export default CustomLoading;