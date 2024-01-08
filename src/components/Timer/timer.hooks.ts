import { useCallback, useEffect, useState } from "react";
import { ITimerOptions } from "../../types/common.types";

export interface ITimerHook {
    state: {
        milliseconds: number;
        seconds: number;
        minutes: number;
        isPause: boolean;
        isOver: boolean;
    },
    actions: {
        setResume: () => void,
        setPause: () => void,
        setReset: () => void,
    }
}

export function useTimer({initialSecs, initialMinutes}: ITimerOptions): ITimerHook {
    const [deadlineTs, setDeadlineTs] = useState(0);
    const [pauseTime, setPauseTime] = useState(0);
    const [lastPauseTs, setLastPauseTs] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isPause, setIsPause] = useState(false);
    const [isOver, setIsOver] = useState(false);

    // On mount reset/start timer
    useEffect(() => {
        setReset()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const isTimesUp = deadlineTs - Date.now() <= 0;
            if(isPause || isTimesUp) {
                clearInterval(interval)
            }
            if(isTimesUp) {
                // Set timer to 00:00:00
                refreshTime(Date.now())
                setIsOver(true);
            } else {
                refreshTime()
            }
        }, 50);
        return () => clearInterval(interval);
    }, [isPause, deadlineTs]);

    // Refresh time based on Date.now()
    const refreshTime = (newDeadlineTs = deadlineTs) => {
        const newDiff = newDeadlineTs - Date.now(); 
        setMinutes(Math.floor((newDiff / 1000 / 60)));
        setSeconds(Math.floor((newDiff / 1000) % 60));
        const milisecsNew = Math.floor(((newDiff / 10) % 100)).toFixed(0)
        setMilliseconds(Number(milisecsNew));
    };

    const resetTime = useCallback(() => {
        const deadlineDate: Date = new Date();
        deadlineDate.setSeconds(deadlineDate.getSeconds() + initialSecs);
        deadlineDate.setMinutes(deadlineDate.getMinutes() + initialMinutes);
        const deadlineTs: number = deadlineDate.getTime();
        setDeadlineTs(deadlineTs)
        return deadlineTs;
    }, [])

    const resumeTime = useCallback((newDeadLineTs: number) => {
        // Reseting deadline, with the addition of paused time
        setDeadlineTs(newDeadLineTs)
        setPauseTime(0);
        setLastPauseTs(0);
        return deadlineTs;
    }, [])

    const setPauseAction = useCallback(() => {
        setLastPauseTs(Date.now())
        setIsPause(true);
    }, [])

    const setResume = useCallback(() => {
        // Calculating the pause time
        const updatedPauseTime = pauseTime + (Date.now() - lastPauseTs);
        console.log("PauseTime", updatedPauseTime)
        const newTs = deadlineTs + updatedPauseTime;
        setPauseTime(updatedPauseTime)
        setIsPause(false);
        resumeTime(newTs)
    }, [lastPauseTs, pauseTime])

    const setReset = useCallback(() => {
        setIsPause(false);
        setIsOver(false);
        const newdeadlineTs = resetTime() ;
        refreshTime(newdeadlineTs)
    }, [])

    return {
        state: {seconds, minutes, milliseconds, isPause, isOver},
        actions: {setResume, setPause: setPauseAction, setReset}
    }
}