import React, {useEffect, useRef, useState} from 'react';
import './steps.css';
import StepLine from "./StepLine";
import StepCircle from "./StepCircle";

type StepProps = {
    currentStepIndex: number,
    steps: number
}
const Steps = ({currentStepIndex, steps}: StepProps) => {
    const [click, setClick] = useState<number>(0);

    // const attributeCircle = {
    //     className: 'rounded-circle bg-primary step__circle'
    // }
    //
    // const attributeLine = {
    //     className: 'step__line '
    // }

    useEffect(() => {
        setClick(currentStepIndex + 1)
        // handleActive(currentStepIndex + 1)
    }, [currentStepIndex])

    return (
            <div className="row mb-4 justify-content-center">
                <StepCircle click={click} number={1} title="Jop Info"/>
                <StepLine click={click} number={1}/>
                <StepCircle click={click} number={2} title="Personal Info"/>
                <StepLine click={click} number={2}/>
                <StepCircle click={click} number={3} title="Address Info"/>
                <StepLine click={click} number={3}/>
                <StepCircle click={click} number={4} title="Contact file"/>
                <StepLine click={click} number={4}/>
                <StepCircle click={click} number={5} title="Attached  file"/>
            </div>
    );
}

export default Steps;