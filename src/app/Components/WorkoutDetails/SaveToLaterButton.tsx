"use client"
import { workOutdatatype } from "@/app/type";
import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa6";

const SaveToLaterButton = ({ data }: { data: workOutdatatype }) => {

const {addToSave, setAddToSave} = useContext(WorkoutContext)

    const handleAddToSave = () => {
        setAddToSave([...addToSave, data])
        alert("add to save later")
    }

    return (
        <button onClick={()=> handleAddToSave()}
        className="w-full md:w-auto text-base font-bold text-[ #e5e7eb] btn btn-outline px-6 w-auto md:ml-5"
        >
            <span><FaRegBookmark /></span> Save for later</button>
    );
};

export default SaveToLaterButton;