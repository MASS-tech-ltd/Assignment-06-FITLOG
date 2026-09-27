
import Image from "next/image";
import { workOutdatatype } from "../type";
import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface MyPlanPropsType {
    plan: workOutdatatype
}

const Myplan = ({ plan }: MyPlanPropsType) => {
    return (
        <div>
            <div className="card card-side border border-[#232732] rounded-2xl bg-[#181b23] shadow-sm p-2.5 mx-6">
                <figure className="rounded-xl">
                    <Image
                        src={plan.image}
                        alt="Photo"
                        width={100}
                        height={50}
                    />
                </figure>


                <div className="flex justify-between w-full">
                    <div className="mt-4 ml-5">
                        <h2 className="card-title font-oswald font-bold text-xl uppercase text-white">{plan.name}</h2>
                        <p className="font-semibold text-sm text-[#8a92a0] mt-1 mb-3">{plan.equipment}</p>
                        <div className="flex items-center flex-wrap">
                            <div className="flex items-center">
                                <FaRegClock className="font-normal text-base text-[#c2f800]" />
                                <h5 className="font-normal text-base text-gray-400 ml-1.5">{plan.duration}</h5>
                            </div>
                            <div className="flex items-center mx-6">
                                <FaFire className="font-normal text-base text-[#c2f800]" />
                                <h5 className="font-normal text-base text-gray-400 ml-1.5">{plan.caloriesBurned} Kcal</h5>
                            </div>
                            <div className="flex items-center">
                                <FaRegStar className="font-normal text-base text-[#c2f800]" />
                                <h5 className="font-normal text-base text-gray-400 ml-1.5">{plan.rating}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:mr-4">
                        <button
                            className="w-full md:w-auto text-base font-bold text-[ #e5e7eb] rounded-3xl btn btn-outline px-6 w-auto mr-3"
                        >
                            <span></span>View Details</button>


                        <button className="btn btn-primary border-0 
                        text-xm font-bold text-black rounded-3xl bg-lime-400 mr-3"><span><FaCheck /></span> Mark as Done</button>
                        <span className="text-[#6b7280] text-2xl"><FaXmark /></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myplan;