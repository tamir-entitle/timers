import useStyles from "./Actions.styles"
import { ITimerHook } from "../Timer/timer.hooks";

export default function Timer(props: ITimerHook) {
    const classes = useStyles();
    const { state, actions } = props;
    return <div className={classes.actions}>
        <button className={classes.pauseBtn} 
                onClick={() => state.isPause ? actions.setResume() : actions.setPause()}
                disabled={state.isOver}
        >
            {state.isPause ? "Resume" : "Pause"}
        </button>
        <button className={classes.resetBtn} onClick={() => actions.setReset()}>Reset</button>
    </div>
}

