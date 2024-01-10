import { useTimersContext } from "../../store/timers.store";
import Timer from "../Timer";

export default function Timers() {
    const { state } = useTimersContext();
    const { timers } = state;

    return <>
        {timers.map((timerOptions, i) => <Timer key={`timer_${i}`} {...timerOptions} />)}
    </>
}




