"use client";

import { WorkoutContext } from "@/WorkOutContext/WorkOutContext";
import { useContext } from "react";
import Myplan from "../Components/Myplan";
import SavedCards from "../Components/SavedCard";
import Link from "next/link";
import { useState } from "react";
import { workOutdatatype } from "../type";

const MyplanPage = () => {
    const { addToPlan, addToSave } = useContext(WorkoutContext);
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const activeData = activeTab === "plan" ? addToPlan : addToSave;
    const [sortBy, setShortBy] = useState<"rating" | "duration" | "calories">("rating")

    const totalMinutes = activeData.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = activeData.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );
    const sortWorkOuts = (workOut: workOutdatatype[]) => {
        const sortedWorkOut = [...workOut]
        if (sortBy === "rating") {
            sortedWorkOut.sort((a, b) => b.rating - a.rating)
        }
        if (sortBy === "duration") {
            sortedWorkOut.sort((a, b) => b.duration - a.duration)
        }
        if (sortBy === "calories") {
            sortedWorkOut.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        }
        return sortedWorkOut;
    }


    const sortedMyPlans = sortWorkOuts(addToPlan)
    const sortedSaved = sortWorkOuts(addToSave)
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
                                Exercises
                            </p>
                            <h1 className="font-oswald font-bold text-4xl text-[#c2f800]">
                                {addToPlan.length}
                            </h1>
                        </div>

                        <div className="text-center">
                            <p className="font-normal text-sm text-[#8a92a0]">
                                Minutes
                            </p>
                            <h1 className="font-oswald font-bold text-4xl text-white">
                                {totalMinutes}
                            </h1>
                        </div>

                        <div className="text-center">
                            <p className="font-normal text-sm text-[#8a92a0]">
                                Calories
                            </p>
                            <h1 className="font-oswald font-bold text-4xl text-white">
                                {totalCalories}
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
                    defaultChecked
                    onChange={() => setActiveTab("plan")}
                />

                <div className="tab-content rounded-2xl border-base-300 bg-[#13161d] md:py-6 py-6 mt-6 space-y-3">
                    {addToPlan.length > 0 ? (
                        sortedMyPlans.map((plan) => (
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
                                <Link href={"/"}>
                                    <button className="btn btn-primary border-0 text-sm font-bold text-black rounded-3xl bg-lime-400">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab border border-[#232732] bg-[#151921] rounded-xl ml-2"
                    aria-label="Saved"
                    onChange={() => setActiveTab("saved")}

                />


                <div className="tab-content rounded-2xl border-base-300 bg-[#13161d] md:py-6 py-6 mt-6 space-y-3">

                    {addToSave.length > 0 ? (
                        sortedSaved.map((saved) => (
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
                                <Link href={"/"}>
                                    <button className="btn btn-primary border-0 text-sm font-bold text-black rounded-3xl bg-lime-400">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex items-center md:ml-74 lg:ml-278 min-[375px]:mt-1 min-[375px]:ml-55 min-[425px]:mt-1 min-[425px]:ml-53  absolute md:static">
                    <h5 className="hidden min-[425px]:block md:mr-4 mr-2 md:text-[15px] text-sm">Sort by</h5>
                    <select
                        value={sortBy}
                        onChange={(e) => setShortBy(e.target.value as "rating" | "duration" | "calories")}
                        className="select md:h-10 h-8 md:w-40 w-29 outline-none">
                        <option disabled={true}>Sort by</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MyplanPage;