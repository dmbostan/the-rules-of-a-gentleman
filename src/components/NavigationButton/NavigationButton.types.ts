import {ReactNode} from "react";

export type NavigationButtonProperties = {
    direction: 'forward' | 'backward' | 'random',
    children: ReactNode | ReactNode[],
    step: number,
    setStep: (argument:number) => void,
    stepsTotal: number
}