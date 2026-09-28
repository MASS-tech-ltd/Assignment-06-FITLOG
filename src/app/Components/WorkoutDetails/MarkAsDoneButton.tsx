"use client";

import { workOutdatatype } from "@/app/type";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

interface MarkAsDoneButtonPropsType {
    workout: workOutdatatype
}

const MarkAsDoneButton = ({ workout } :MarkAsDoneButtonPropsType) => {
    const [isDone, setIsDone] = useState(false);

    const handleClick = () => {
        setIsDone(true)
        toast.info(`${workout.name} is done!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <button
            onClick={handleClick}
            disabled={isDone}
            className="flex items-center px-4 py-2 md:btn md:btn-primary border-0
            md:text-base text-[10px] md:font-bold font-semibold text-black
            rounded-3xl bg-lime-400 ml-2.5 md:ml-0 md:mr-3
            disabled:bg-lime-200 disabled:text-gray-600
            disabled:cursor-not-allowed"
        >
            <span className="mr-1.5 md:mr-0">
                <FaCheck />
            </span>

            {isDone ? "Exercise done" : "Mark as Done"}
        </button>
    );
};

export default MarkAsDoneButton;