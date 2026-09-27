"use client";

import { createContext, ReactNode, useState } from "react";
import { workOutdatatype } from "@/app/type";

interface WorkoutContextType {
    addToPlan: workOutdatatype[];
    setAddToPlan: React.Dispatch<React.SetStateAction<workOutdatatype[]>>;
    addToSave: workOutdatatype[];
    setAddToSave: React.Dispatch<React.SetStateAction<workOutdatatype[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({
    addToPlan: [],
    setAddToPlan: () => {},
    addToSave: [],
    setAddToSave: () => {},
});

const WorkOutProvider = ({ children }: { children: ReactNode }) => {
    const [addToPlan, setAddToPlan] = useState<workOutdatatype[]>([]);
    const [addToSave, setAddToSave] = useState<workOutdatatype[]>([]);

    const sharedValues = {
        addToPlan,
        setAddToPlan,
        addToSave,
        setAddToSave,
    };

    return (
        <WorkoutContext.Provider value={sharedValues}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkOutProvider;