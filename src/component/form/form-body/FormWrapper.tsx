import React, {ReactNode} from 'react';
import exp from "constants";

export type FormWrapperProps = {
    title: string,
    children: ReactNode
}
const FormWrapper = ({title, children}: FormWrapperProps) => {
    return(
        <>
            <h2 style={{ padding:"15px 15px 10px 15px", margin:0, fontSize:"22px", borderBottom:"1px solid #eff2f5",
            }}>{title}</h2>
            <div className="card-body d-flex flex-column justify-content-center align-center">{children}</div>
        </>
    );
}

export default FormWrapper;