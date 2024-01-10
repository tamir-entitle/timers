import { useCallback } from "react";
import { useTimersContext } from "../../store/timers.store";
import { ITimerOptions } from "../../types/common.types";
import useStyles from "./AddTimerButton.styles"

function AddTimerButton({ initialMinutes, initialSecs }: ITimerOptions) {
  const classes = useStyles();
  const { actions } = useTimersContext()

  const onAddTimer = useCallback(() => {
    actions.addTimer({ initialMinutes, initialSecs })
  }, [actions, initialMinutes, initialSecs])

  return (
    <button className={classes.button} onClick={onAddTimer}>Add timer</button>
  )
}

export default AddTimerButton;