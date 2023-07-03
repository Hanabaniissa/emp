import {ReactElement, useState} from "react";

const st = [
    {
        config: {
            enctype: "multipart"
        },
        component: () => {}
    }, {

    }
]


export function useMultiFrom(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

    function goTo(index: number) {
        return setCurrentStepIndex(index)
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    };

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        back,
        next,
        goTo,
        steps: steps.length,
        lastStep: currentStepIndex === steps.length - 1,
        firstStep: currentStepIndex === 0

    }

}