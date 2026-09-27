import Image from "next/image";
import { workOutdatatype } from "../type";
import { LuCalendarPlus2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";

interface WorkOutDetailsPagePropsType {
    params: Promise<{
        workoutid: string
    }>;
}

const getWorkOutDatas = async (): Promise<workOutdatatype[]> => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    return res.json()
}

const WorkOutDetailsPage = async ({ params }: WorkOutDetailsPagePropsType) => {
    const { workoutid } = await params;
    const workOutData = await getWorkOutDatas()
    const data = workOutData.find((data) => data.id === Number(workoutid)) as workOutdatatype;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto px-8 md:py-14 py-10">
                <figure className="md:rounded-2xl">
                    <Image
                        src={data.image}
                        alt="Photo"
                        width={500}
                        height={100}
                    />
                </figure>
                <div className="lg:ml-14">
                    <h2 className="card-title mt-6 md:mt-7 lg:mt-0 font-oswald font-bold uppercase text-4xl text-white">{data.name}</h2>
                    <p className="font-normal text-base text-gray-400 py-5">{data.description}</p>
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

                    <div className="mt-7 bg-[#151922] border border-[#232834] rounded-2xl">
                        <div className="flex justify-between mx-6 py-4">
                            <h5>EQUIPMENT</h5>
                            <h5>{data.equipment}</h5>
                        </div>
                        <div className="border-t border-[#20242e] pb-2 w-full"></div>
                        <div className="flex justify-between mx-6 py-4">
                            <h5>DIFFICULTY</h5>
                            <h5>{data.difficulty}</h5>
                        </div>
                        <div className="border-t border-[#20242e] pb-2 w-full"></div>
                        <div className="flex justify-between mx-6 py-4">
                            <h5>SETS</h5>
                            <h5>{data.sets}</h5>
                        </div>
                        <div className="border-t border-[#20242e] pb-2 w-full"></div>
                        <div className="flex justify-between mx-6 py-4">
                            <h5>REPS</h5>
                            <h5>{data.reps}</h5>
                        </div>
                        <div className="border-t border-[#20242e] pb-2 w-full"></div>
                        <div className="flex justify-between mx-6 py-4">
                            <h5>DURATION</h5>
                            <h5>{data.duration}</h5>
                        </div>
                        <div className="border-t border-[#20242e] pb-2 w-full"></div>
                        <div className="flex justify-between mx-6 py-4">
                            <h5>CALORIES</h5>
                            <h5>{data.caloriesBurned}</h5>
                        </div>
                        <div className="border-t border-[#20242e] pb-2 w-full"></div>
                        <div className="flex justify-between mx-6 py-4">
                            <h5>RATING</h5>
                            <h5>{data.rating}</h5>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-oswald font-extrabold text-lg text-white uppercase mt-7 mb-2">INSTRUCTIONS</h2>
                        <ol className="font-normal text-sm text-gray-300 list-decimal pl-5 space-y-1.5 mb-8">
                            {data.instructions.map((instruction, index) => (
                                <li key={index}>
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <button className="btn mb-4 md:mb-0 w-full md:w-auto px-6 border-0 
                        text-base font-bold text-black rounded-md bg-lime-400"
                        ><span><LuCalendarPlus2 /></span> Add to today&apos;s plan</button>
                        <button className="w-full md:w-auto text-base font-bold text-[ #e5e7eb] btn btn-outline px-6 w-auto md:ml-5"><span><FaRegBookmark /></span> Save for later</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkOutDetailsPage;