import useStyles from "./TimerCountDown.styles";
import { addZeroToTime } from "./timerCountDown.utils";
import { ITimerHook } from "../Timer/timer.hooks";

export default function TimerCountDown(props: ITimerHook['state']) {
    const classes = useStyles();
    const { minutes, seconds, milliseconds } = props;
    return <div className={classes.minutesAndSeconds}>
        <span className={classes.minutes}>{addZeroToTime(minutes)}</span>
        <span className={classes.seconds}>:{addZeroToTime(seconds)}</span>
        <span className={classes.milisecs}>:{addZeroToTime(milliseconds)}</span>
    </div>
}

