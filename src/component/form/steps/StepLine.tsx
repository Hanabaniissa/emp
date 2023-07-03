import React from 'react';

type Props = {
    click : any,
    number : number
}
const StepLine = (props: Props) => {
    return (

        <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-center p-0">
            <div className={props.click >= props.number ? 'step__line':'step__line_inactive'}></div>
        </div>
    );
}

export default StepLine;