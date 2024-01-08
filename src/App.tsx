import { useState } from 'react'
import useStyles from "./App.styles"
import Timers from './components/Timers';
import Inputs from "./components/Inputs";
import {TimersProvider} from "./store/timers.store"
import AddTimerButton from './components/AddTimerButton';


function App() {
  const classes = useStyles();
  const [initialSecs, setInitialSecs] = useState(10);
  const [initialMinutes, setInitialMinutes] = useState(0);

  return (
      <div className={classes.appWrapper}>
        <TimersProvider>
          <Timers />
          <Inputs state={{initialMinutes, initialSecs}} 
                  actions={{ setInitialMinutes, setInitialSecs}}
          />
          <AddTimerButton initialSecs={initialSecs} initialMinutes={initialMinutes} />
        </TimersProvider>
      </div>
  )
}

export default App
