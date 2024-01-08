import { useTimersContext } from "../../store/timers.store";
import { ITimerOptions } from "../../types/common.types";
import useStyles from "./AddTimerButton.styles"

function AddTimerButton({initialMinutes, initialSecs}: ITimerOptions) {
    const classes = useStyles();
    const {actions} = useTimersContext()
    return (
      <button className={classes.button} onClick={() => actions.addTimer({initialMinutes, initialSecs})}>Add timer</button>
    )
  }
  
  export default AddTimerButton;