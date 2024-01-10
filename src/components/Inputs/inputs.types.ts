import { ITimerOptions } from "../../types/common.types";

export interface IInputs {
    state: ITimerOptions,
    actions: {
        setInitialSecs: (seconds: number) => void,
        setInitialMinutes: (minutes: number) => void,
    }
}