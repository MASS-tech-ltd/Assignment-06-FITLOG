import Image from "next/image";
import { workOutdatatype } from "../type";
import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import MarkAsDoneButton from "./WorkoutDetails/MarkAsDoneButton";
import CrossDeleteButton from "./WorkoutDetails/CrossDeleteButton";

interface SavedCardsPropsType {
    saved: workOutdatatype;
}

const SavedCards = ({ saved }: SavedCardsPropsType) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row border border-[#232732] rounded-2xl bg-[#181b23] my-4 md:my-0 shadow-sm p-2.5 mx-4 md:mx-6">

                <div className="flex justify-center pt-2.5 pb-3 md:pt-0 md:pb-0">
                    <Image
                        className="md:rounded-xl rounded-xl md:w-30 w-75"
                        src={saved.image}
                        alt="Photo"
                        width={120}
                        height={10}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between md:w-full">

                    <div className="mt-3 ml-5">
                        <h2 className="font-oswald font-bold text-xl uppercase text-white">
                            {saved.name}
                        </h2>

                        <p className="font-semibold text-sm text-[#8a92a0] mt-1 mb-3">
                            {saved.equipment}
                        </p>

                        <div className="flex items-center flex-wrap">

                            <div className="flex items-center">
                                <FaRegClock className="font-normal text-xm md:text-base text-[#c2f800]" />
                                <h5 className="font-normal text-xm md:text-base text-gray-400 ml-1.5">
                                    {saved.duration}
                                </h5>
                            </div>

                            <div className="flex items-center mx-6">
                                <FaFire className="font-normal text-xm md:text-base text-[#c2f800]" />
                                <h5 className="font-normal text-xm md:text-base text-gray-400 ml-1.5">
                                    {saved.caloriesBurned} Kcal
                                </h5>
                            </div>

                            <div className="flex items-center">
                                <FaRegStar className="font-normal text-xm md:text-base text-[#c2f800]" />
                                <h5 className="font-normal text-xm md:text-base text-gray-400 ml-1.5">
                                    {saved.rating}
                                </h5>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center items-center md:mr-4 my-5 md:my-0">

                        <div className="flex lg:flex-row md:flex-col lg:md:space-y-0 md:space-y-2.5 items-center">

                            <Link href={`/${saved.id}`}>
                                <button
                                    className="px-4 py-2 border border-[#c2f800] md:btn md:btn-outline md:w-auto md:text-base text-[10px] md:font-bold font-semibold text-[#e5e7eb] rounded-3xl md:px-6 md:mr-3"
                                >
                                    View Details
                                </button>
                            </Link>

                            <MarkAsDoneButton
                                workout={saved}
                            />

                        </div>

                        <CrossDeleteButton
                            workout={saved}
                            type="saved"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedCards;