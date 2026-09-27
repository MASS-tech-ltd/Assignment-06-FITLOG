"use client"
import { createContext, ReactNode, useState } from "react";

export const WorkoutContext = createContext({})

const WorkOutProvider = ({ children }: {children : ReactNode}) => {

    const [addToPlan, setAddToPlan] = useState([])
    const [addToSave, setAddToSave] = useState([])

    const sharedValues = {
        addToPlan,
        setAddToPlan,
        addToSave,
        setAddToSave
    }

    return <WorkoutContext.Provider value={sharedValues}>
        {children}
    </WorkoutContext.Provider>
};

export default WorkOutProvider;