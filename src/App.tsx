import { ReactComponent as Logo } from '../src/assets/logo.svg'
import {useEffect, useState} from "react";
import Heading from "./components/Heading/Heading";
import NavigationButton from "./components/NavigationButton/NavigationButton";

function App() {

    const [rules, setRules] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        fetch('/rules.json')
            .then(response => response.json())
            .then(data => setRules(data.rules))
            .catch(error => console.log(error));
    }, []);

  return (
    <div className="App">
        <Logo />

        <Heading step={activeStep} />
        {rules[activeStep]}
         <br/>
        {/*<button onClick={() => {*/}
        {/*    setActiveStep(activeStep + 1)*/}
        {/*}}>*/}
        {/*    Next*/}
        {/*</button>*/}
        <NavigationButton direction="backward" step={activeStep} setStep={setActiveStep} stepsTotal={rules.length}>
            Prev
        </NavigationButton>
        <NavigationButton direction="random" step={activeStep} setStep={setActiveStep} stepsTotal={rules.length}>
            Random
        </NavigationButton>
        <NavigationButton direction="forward" step={activeStep} setStep={setActiveStep} stepsTotal={rules.length}>
            Next
        </NavigationButton>
    </div>
  )
}

export default App
