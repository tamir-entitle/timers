import { useCallback } from "react";
import { IInputs } from "./inputs.types";

type actionType = IInputs['actions']['setInitialSecs'] | IInputs['actions']['setInitialMinutes']

export const useCreateOnUpdate = (action: actionType) => {
    return useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {target} = e;
        const {value, maxLength} = target;
        if(value.length > maxLength) return
        action(Number(e.target.value))
    }, [action]);
}