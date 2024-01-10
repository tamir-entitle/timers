import useStyles from "./Actions.styles"
import { ITimerHook } from "../Timer/timer.hooks";
import { useCallback } from "react";

export default function Timer({ state, actions } : ITimerHook) {
    const classes = useStyles();
    const {isOver, isPause} = state;

    const onPauseOrResume = useCallback(() => isPause ? actions.setResume() : actions.setPause(), [actions, isPause]) 

    return <div className={classes.actions}>
        {!isOver ? <button className={classes.pauseBtn} 
                onClick={onPauseOrResume}
        >
            {isPause ? "Resume" : "Pause"}
        </button> : null}
        <button onClick={actions.setReset}>Reset</button>
    </div>
}

