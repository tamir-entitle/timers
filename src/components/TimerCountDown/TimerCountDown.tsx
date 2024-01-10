import useStyles from "./TimerCountDown.styles";
import { addZeroToTime } from "./timerCountDown.utils";
import { ITimerHook } from "../Timer/timer.hooks";

export default function TimerCountDown({ minutes, seconds, milliseconds }: ITimerHook['state']) {
    const classes = useStyles();
    return <div className={classes.minutesAndSeconds}>
        <span className={classes.minutes}>{addZeroToTime(minutes)}</span>
        <span className={classes.seconds}>:{addZeroToTime(seconds)}</span>
        <span className={classes.milisecs}>:{addZeroToTime(milliseconds)}</span>
    </div>
}

