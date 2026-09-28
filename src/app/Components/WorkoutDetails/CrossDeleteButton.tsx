"use client";

import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { workOutdatatype } from "@/app/type";
import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

interface CrossDeleteButtonPropsType {
    workout: workOutdatatype;
    type: "plan" | "saved";
}

const CrossDeleteButton = ({workout, type}: CrossDeleteButtonPropsType) => {

    const { setAddToPlan, setAddToSave } = useContext(WorkoutContext);

    const handleDelete = () => {

        if (type === "plan") {
            setAddToPlan((prev) =>
                prev.filter((item) => item.id !== workout.id)
            );

            toast.info(`"${workout.name}" removed from today's plan!`, {
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

        } else {
            setAddToSave((prev) =>
                prev.filter((item) => item.id !== workout.id)
            );

            toast.info(`"${workout.name}" removed from saved!`, {
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
    };

    return (
        <span
            onClick={handleDelete}
            className="text-[#6b7280] ml-2.5 md:ml-0 md:text-2xl text-xl cursor-pointer"
        >
            <FaXmark />
        </span>
    );
};

export default CrossDeleteButton;