import constate from "constate";
// import { useTimer } from "./timer.hooks";
import { useCallback, useState } from "react";
import { ITimerOptions } from "../types/common.types";

function useTimers() {
    const [timers, setTimers] = useState<ITimerOptions[]>([]);
    const addTimer = useCallback((options: ITimerOptions) => {
        const newTimers = [...timers, options];
        setTimers(newTimers)
    }, [timers])

    return { 
        state: { timers }, 
        actions: { addTimer } 
    };
}

export const [TimersProvider, useTimersContext] = constate(useTimers);

