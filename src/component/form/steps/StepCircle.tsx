import React from 'react';

type Props = {
    click: any,
    number: number,
    title: string
}
const StepCircle = ({click, number, title}: Props) => {
    return (

        <div className="col-lg-1 col-md-2 col-sm-2 d-flex flex-column gap-3 align-items-center p-0">
            <div className={`rounded-circle bg-primary ${click >= number ? 'step__circle' : 'step__circle-inactive'}`}>{number}
            </div>
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
}

export default StepCircle;