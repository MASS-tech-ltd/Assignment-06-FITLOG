import Image from "next/image";
import { workOutdatatype } from "../type";
import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

interface WorkoutCardPropsType {
    data: workOutdatatype
}

const WorkoutCard = ({ data }: WorkoutCardPropsType) => {
    return (
        <Link href={`/${data.id}`}>
            <div className="card  bg-[#15171d] border border-transparent hover:border-[#c2f800] rounded-2xl shadow-sm transition duration-200">
                <figure>
                    <Image
                        src={data.image}
                        alt="Photo"
                        width={500}
                        height={50}
                        className="w-full h-auto"
                    />
                </figure>
                <div className="card-body">
                    <div className="flex gap-2">
                        {data.muscleGroups.map((muscle) => (
                            <div
                                key={muscle}
                                className="font-bold text-xs uppercase text-black px-2.5 py-0.5 bg-[#c2f800] rounded-xl"
                            >
                                {muscle}
                            </div>
                        ))}
                    </div>
                    <h2 className="card-title font-bold font-oswald text-[26px] text-white uppercase mt-2">
                        {data.name}
                    </h2>
                    <p className="font-normal text-base text-gray-400 pb-2">{data.equipment}</p>
                    <div className="border-t border-[#20242e] pb-2 w-full"></div>
                    <div className="flex items-center flex-wrap">
                        <div className="flex items-center">
                            <FaRegClock className="font-normal text-base text-[#c2f800]" />
                            <h5 className="font-normal text-base text-gray-400 ml-1.5">{data.duration}</h5>
                        </div>
                        <div className="flex items-center mx-6">
                            <FaFire className="font-normal text-base text-[#c2f800]" />
                            <h5 className="font-normal text-base text-gray-400 ml-1.5">{data.caloriesBurned} Kcal</h5>
                        </div>
                        <div className="flex items-center">
                            <FaRegStar className="font-normal text-base text-[#c2f800]" />
                            <h5 className="font-normal text-base text-gray-400 ml-1.5">{data.rating}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;