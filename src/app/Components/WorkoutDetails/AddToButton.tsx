"use client"
import { workOutdatatype } from "@/app/type";
import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";

const AddToButton = ({ data }: { data: workOutdatatype }) => {

const {addToPlan, setAddToPlan} = useContext(WorkoutContext)

    const handleAddToplan = () => {
        setAddToPlan([...addToPlan, data])
        alert("add to my plan")
    }

    return (
        <button onClick={() => handleAddToplan()} className="btn mb-4 md:mb-0 w-full md:w-auto px-6 border-0 
        text-base font-bold text-black rounded-md bg-lime-400"
        ><span><LuCalendarPlus2 /></span> Add to today&apos;s plan</button>
    );
};

export default AddToButton;