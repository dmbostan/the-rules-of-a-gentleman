import { ReactComponent as Logo } from '../src/assets/logo.svg'
import {useEffect, useState} from "react";
import Heading from "./components/Heading/Heading";

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
    </div>
  )
}

export default App
