"use client";
import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";


const MyplanPage = () => {

    const {addToPlan, addToSave} = useContext(WorkoutContext)

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="mt-10">
                <h1 className="font-oswald font-bold text-4xl uppercase text-white">My plan</h1>
                <p className="font-normal mt-2 mb-6 text-sm text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
                <div className="border border-[#232732] rounded-2xl w-full bg-[#13161d]">
                    <div className="py-8 flex  justify-around">
                        <div className="text-center">
                            <p className="font-normal text-xm text-[#8a92a0]">Experience</p>
                            <h1 className="font-oswald font-bold text-4xl text-[#c2f800]">0</h1>
                        </div>
                        <div className="text-center">
                            <p className="font-normal text-xm text-[#8a92a0]">Experience</p>
                            <h1 className="font-oswald font-bold text-4xl text-white">0</h1>
                        </div>
                        <div className="text-center">
                            <p className="font-normal text-xm text-[#8a92a0]">Experience</p>
                            <h1 className="font-oswald font-bold text-4xl text-white">0</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border mt-8">
                <input type="radio" name="my_tabs_2" className="tab border border-[#232732] rounded-xl bg-[ #151921]" aria-label="Today's Plan" />
                <div className="tab-content border-base-300 bg-[#13161d] py-10 md:py-16 lg:py-30 mt-6">
                    <h1>AADDDDD ::{addToPlan.length}</h1>
                    <h2 className="font-oswald text-center font-bold text-xl text-white uppercase">NOTHING HERE YET</h2>
                    <p className="font-normal text-center px-5 md:px-0 mt-1.5 mb-5 text-xm text-[#a1a1aa]">Browse the library and add a lift to get today moving.</p>
                    <div className="flex justify-center">
                        <button className="btn btn-primary border-0 
                        text-xm font-bold text-black rounded-3xl bg-lime-400">Go to workouts</button>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab border border-[#232732] rounded-xl ml-2" aria-label="Saved" defaultChecked />
                <div className="tab-content border-base-300 bg-[#13161d] py-10 md:py-16 lg:py-30 mt-6">
                    <h1>saveeee ::{addToPlan.length}</h1>
                    <h2 className="font-oswald text-center font-bold text-xl text-white uppercase">NOTHING HERE YET</h2>
                    <p className="font-normal text-center px-5 md:px-0 mt-1.5 mb-5 text-xm text-[#a1a1aa]">Browse the library and add a lift to get today moving.</p>
                    <div className="flex justify-center">
                        <button className="btn btn-primary border-0 
                        text-xm font-bold text-black rounded-3xl bg-lime-400">Go to workouts</button>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default MyplanPage;