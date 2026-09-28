"use client"
import { workOutdatatype } from "@/app/type";
import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const SaveToLaterButton = ({ data }: { data: workOutdatatype }) => {

    const { addToSave, setAddToSave } = useContext(WorkoutContext)

    const handleAddToSave = () => {
        const alreadyAdded = addToSave.some((save) => save.id === data.id)
        if (alreadyAdded) {
            toast.warning(`${data.name} is already saved for later.`, {
                position: "top-right",
                autoClose: 2000,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        setAddToSave([...addToSave, data])
        toast.success(`${data.name} is workout saved for later`, {
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
        <button onClick={() => handleAddToSave()}
            className="w-full md:w-auto text-base font-bold text-[ #e5e7eb] btn btn-outline px-6 w-auto md:ml-5"
        >
            <span><FaRegBookmark /></span> Save for later</button>
    );
};

export default SaveToLaterButton;