import useStyles from "./Timer.styles"
import TimerCountDown from "../TimerCountDown"
import Actions from "../Actions";
import { ITimerOptions } from "../../types/common.types";
import { useTimer } from "./timer.hooks";

export default function Timer(props: ITimerOptions) {
    const classes = useStyles();
    const {state, actions} = useTimer(props)
    return <div className={classes.timerAndActionsWrapper}>
            <div className={`${classes.timerWrapper} ${state.isOver ? classes.timerWrapperRed : ""}`}>
                <TimerCountDown {...state} />
            </div>
            {state.isOver ? <div className={classes.isOver}>Time is up!</div> : null}
            <Actions state={state} actions={actions}/>
    </div>
}



