import { useCallback, useEffect, useRef, useState } from "react";
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

export function useTimer({ initialSecs, initialMinutes }: ITimerOptions): ITimerHook {
    const [deadlineTs, setDeadlineTs] = useState(0);
    const [lastPauseTs, setLastPauseTs] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isPause, setIsPause] = useState(false);
    const [isOver, setIsOver] = useState(false);
    // Ref for immediate update isPause state check, used for animation frame changes
    const isPauseRef = useRef(isPause);

    // Refresh time based on Date.now()
    const refreshTime = useCallback((newDeadlineTs = deadlineTs) => {
        const newDiff = newDeadlineTs - Date.now();
        const seconds: number = newDiff / 1000;
        setMinutes(Math.floor((seconds / 60)));
        setSeconds(Math.floor(seconds % 60));
        const milisecsNew = Number(Math.floor(((newDiff / 10) % 100)).toFixed(0))
        setMilliseconds(milisecsNew);
    }, [deadlineTs]);

    const resetTime = useCallback(() => {
        const deadlineDate: Date = new Date();
        deadlineDate.setSeconds(deadlineDate.getSeconds() + initialSecs);
        deadlineDate.setMinutes(deadlineDate.getMinutes() + initialMinutes);
        const deadlineTs: number = deadlineDate.getTime();
        setDeadlineTs(deadlineTs)
        isPauseRef.current = false;
        setIsPause(false);
        return deadlineTs;
    }, [initialMinutes, initialSecs])

    const resumeTime = useCallback((newDeadLineTs: number) => {
        // Reseting deadline, with the addition of paused time
        setDeadlineTs(newDeadLineTs)
        setLastPauseTs(0);
        isPauseRef.current = false;
        return deadlineTs;
    }, [deadlineTs])

    const setPauseAction = useCallback(() => {
        setLastPauseTs(Date.now())
        setIsPause(true);
        isPauseRef.current = true;
    }, [])

    const setResume = useCallback(() => {
        // Calculating the pause time
        const pauseTime = Date.now() - lastPauseTs;
        const newTs = deadlineTs + pauseTime;
        setIsPause(false);
        resumeTime(newTs)
    }, [deadlineTs, lastPauseTs, resumeTime])

    const setReset = useCallback(() => {
        const newdeadlineTs = resetTime();
        setIsPause(false);
        setIsOver(false);
        refreshTime(newdeadlineTs)
    }, [refreshTime, resetTime])

    // On mount start timer
    useEffect(() => {
        setReset()
    }, [])

    // Animation frame controller
    useEffect(() => {
        if (!deadlineTs) return;
        let animationFrameId: number;

        const tick = () => {
            const isTimesUp = deadlineTs - Date.now() <= 0;
            if (isPauseRef.current) {
                cancelAnimationFrame(animationFrameId);
                return;
            }
            if (isTimesUp) {
                cancelAnimationFrame(animationFrameId);
                // Set timer to 00:00:00
                refreshTime(Date.now())
                setIsOver(true);
                return;
            }
            refreshTime()
            animationFrameId = requestAnimationFrame(tick);
        };
        // Start the animation
        animationFrameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animationFrameId);
    }, [deadlineTs, isPause, refreshTime]);

    return {
        state: { seconds, minutes, milliseconds, isPause, isOver },
        actions: { setResume, setPause: setPauseAction, setReset }
    }
}