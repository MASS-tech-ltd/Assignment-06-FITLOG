"use client"
import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";


const PlanButton = () => {

    const { addToPlan } = useContext(WorkoutContext);

    return (
        <button className="py-1.5 px-2 rounded-md md:py-1.5 md:px-4 md:rounded-lg bg-[#1C1F27] text-gray-300 flex items-center md:gap-2 border border-[#292D36] hover:bg-[#252932] hover:text-white hover:border-[#353A45] active:scale-96 transition duration-200">
            <span className="font-medium text-sm md:text-base mr-1 md:mr-0">Plan</span>
            <span className="w-5 h-5 md:h-6.5 md:w-6.5 text-sm md:text-base rounded-full bg-[#c2f800] text-black font-bold flex items-center justify-center ">
                {addToPlan.length}
            </span>
        </button>
    );
};

export default PlanButton;