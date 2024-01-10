import { useMemo, useState } from 'react'
import useStyles from "./App.styles"
import Timers from './components/Timers';
import Inputs from "./components/Inputs";
import { TimersProvider } from "./store/timers.store"
import AddTimerButton from './components/AddTimerButton';


function App() {
  const classes = useStyles();
  const [initialSecs, setInitialSecs] = useState(10);
  const [initialMinutes, setInitialMinutes] = useState(0);
  const inputsStore = useMemo(() => {
    return {
      state: { initialMinutes, initialSecs },
      actions: { setInitialMinutes, setInitialSecs }
    }
  }, [initialMinutes, initialSecs])

  return (
    <div className={classes.appWrapper}>
      <TimersProvider>
        <Timers />
        <Inputs {...inputsStore} />
        <AddTimerButton initialSecs={initialSecs} initialMinutes={initialMinutes} />
      </TimersProvider>
    </div>
  )
}

export default App
