"use client";

import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";
import { workOutdatatype } from "../type";
import Myplan from "../Components/Myplan";
import SavedCards from "../Components/SavedCard";

const MyplanPage = () => {
    const { addToPlan, addToSave } = useContext(WorkoutContext);

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="mt-10">
                <h1 className="font-oswald font-bold text-4xl uppercase text-white">
                    My plan
                </h1>

                <p className="font-normal mt-2 mb-6 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                <div className="border border-[#232732] rounded-2xl w-full bg-[#13161d]">
                    <div className="py-8 flex justify-around">
                        <div className="text-center">
                            <p className="font-normal text-sm text-[#8a92a0]">
                                Experience
                            </p>
                            <h1 className="font-oswald font-bold text-4xl text-[#c2f800]">
                                0
                            </h1>
                        </div>

                        <div className="text-center">
                            <p className="font-normal text-sm text-[#8a92a0]">
                                Experience
                            </p>
                            <h1 className="font-oswald font-bold text-4xl text-white">
                                0
                            </h1>
                        </div>

                        <div className="text-center">
                            <p className="font-normal text-sm text-[#8a92a0]">
                                Experience
                            </p>
                            <h1 className="font-oswald font-bold text-4xl text-white">
                                0
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border mt-8">
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab border border-[#232732] rounded-xl bg-[#151921]"
                    aria-label="Today's Plan"
                />

                <div className="tab-content border-base-300 bg-[#13161d] md:py-6 mt-6 space-y-3">
                    {addToPlan.length > 0 ? (
                        addToPlan.map((plan) => (
                            <Myplan
                                key={plan.id}
                                plan={plan}
                            />
                        ))
                    ) : (
                        <>
                            <h2 className="font-oswald text-center font-bold text-xl text-white uppercase">
                                NOTHING HERE YET
                            </h2>

                            <p className="font-normal text-center px-5 md:px-0 mt-1.5 mb-5 text-sm text-[#a1a1aa]">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <div className="flex justify-center">
                                <button className="btn btn-primary border-0 text-sm font-bold text-black rounded-3xl bg-lime-400">
                                    Go to workouts
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab border border-[#232732] rounded-xl ml-2"
                    aria-label="Saved"
                    defaultChecked
                />

                <div className="tab-content border-base-300 bg-[#13161d] md:py-6 mt-6 space-y-3">

                    {addToSave.length > 0 ? (
                        addToSave.map((saved) => (
                            <SavedCards
                                key={saved.id}
                                saved={saved}
                            />
                        ))
                    ) : (
                        <>
                            <h2 className="font-oswald text-center font-bold text-xl text-white uppercase">
                                NOTHING HERE YET
                            </h2>

                            <p className="font-normal text-center px-5 md:px-0 mt-1.5 mb-5 text-sm text-[#a1a1aa]">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <div className="flex justify-center">
                                <button className="btn btn-primary border-0 text-sm font-bold text-black rounded-3xl bg-lime-400">
                                    Go to workouts
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyplanPage;