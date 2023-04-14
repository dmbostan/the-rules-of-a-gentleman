const NavigationButton = ({direction, children, step, setStep, stepsTotal}) => {

    const handleNavigation = () => {
        const isBackward = direction === 'backward';
        const isForward = direction === 'forward';
        const isRandom = direction === 'random';

        if( isBackward && step !== 0) {
            setStep(step - 1)
        }

        if(isBackward && step === 0) {
            setStep(stepsTotal - 1)
        }

        if( isForward && step !== stepsTotal) {
            setStep(step + 1)
        }

        if(isForward && step === stepsTotal - 1) {
            setStep(0)
        }

        if(isRandom) {
            const randomStep = Math.floor(Math.random() * stepsTotal)
            setStep(randomStep)
        }
    }

    return(
        <button onClick={() => handleNavigation()}>
            {children}
        </button>
    )
};

export default NavigationButton;