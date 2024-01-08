import useStyles from "./Inputs.styles"
import { ITimerOptions } from "../../types/common.types"

interface IInputs {
    state: ITimerOptions,
    actions: {
        setInitialSecs: (seconds: number) => void,
        setInitialMinutes: (minutes: number) => void,
    }

}

function Inputs({state, actions} : IInputs) {
    const classes = useStyles();

    return (
        <div className={classes.inputsWrapper}>
          <label className={classes.label}>
            <div className={classes.labelText}>Minutes</div>
            <input className={classes.input} type='number' value={state.initialMinutes} onChange={e => actions.setInitialMinutes(Number(e.target.value))} />
          </label>
          <label className={classes.label}>
            <div className={classes.labelText}>Seconds</div>
            <input className={classes.input} type='number' value={state.initialSecs} onChange={e => actions.setInitialSecs(Number(e.target.value))} />
          </label>
        </div>
    )
  }
  
  export default Inputs;