import useStyles from "./Timers.styles"
import { useTimersContext } from "../../store/timers.store";
import Timer from "../Timer";

export default function Timers() {
    const { state } = useTimersContext();
    const { timers } = state;
    const classes = useStyles();

    return <div className={classes.timersWrapper}>
        {timers.map((timerOptions, i) => <Timer key={`timer_${i}`} {...timerOptions} />)}
    </div>
}




