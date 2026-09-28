"use client"
import { workOutdatatype } from "@/app/type";
import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

const AddToButton = ({ data }: { data: workOutdatatype }) => {

    const { addToPlan, setAddToPlan } = useContext(WorkoutContext)

    const handleAddToplan = () => {
        const alreadyAdded = addToPlan.some((plan) => plan.id === data.id)
        if (alreadyAdded) {
            toast.warning(`${data.name} is already added to today's plan.`, {
                position: "top-right",
                autoClose: 2000,
                theme: "dark",
                transition: Bounce,
            });
            return;

        }
        setAddToPlan([...addToPlan, data])
        toast.success(`${data.name} is successfully added to today's plan!`, {
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
        <button onClick={() => handleAddToplan()} className="btn mb-4 md:mb-0 w-full md:w-auto px-6 border-0 
        text-base font-bold text-black rounded-md bg-lime-400"
        ><span><LuCalendarPlus2 /></span> Add to today&apos;s plan</button>
    );
};

export default AddToButton;