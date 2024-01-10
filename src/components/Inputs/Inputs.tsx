import useStyles from "./Inputs.styles"
import { useCreateOnUpdate } from "./inputs.hooks";
import { IInputs } from "./inputs.types";

function Inputs({ state, actions }: IInputs) {
  const classes = useStyles();
  const onUpdateMinutes = useCreateOnUpdate(actions.setInitialMinutes);
  const onUpdateSeconds = useCreateOnUpdate(actions.setInitialSecs);

  return (
    <div className={classes.inputsWrapper}>
      <label className={classes.label}>
        <div className={classes.labelText}>Minutes</div>
        <input className={classes.input}
          type='number'
          min={0}
          max={999}
          maxLength={3}
          value={state.initialMinutes}
          onChange={onUpdateMinutes}
        />
      </label>
      <label className={classes.label}>
        <div className={classes.labelText}>Seconds</div>
        <input className={classes.input}
          type='number'
          min={0}
          max={60}
          maxLength={2}
          value={state.initialSecs}
          onChange={onUpdateSeconds}
        />
      </label>
    </div>
  )
}

export default Inputs;