import React, {FormEvent, MouseEventHandler, ReactElement, useState} from 'react';
import PersonalInfo from "./form-content/PersonalInfo";

type FormProps = {
    next: MouseEventHandler | undefined,
    back: MouseEventHandler | undefined,
    lastStep: boolean,
    firstStep: boolean,
    step: ReactElement,
    onSubmit: (e: FormEvent) => void
}
const FormBody = ({back, next, lastStep, firstStep, step, onSubmit}: FormProps) => {
    const [count, setCount] = useState<boolean>(false)
    return (
        <div className="d-flex justify-content-center" style={{marginTop: "70px"}}>
            <div className="card" style={{
                borderRadius: "15px",
                width: "70%",
                height: "auto",
                border: "0",
                boxShadow: "rgb(222 222 222) 7px 9px 26px 1px"
            }}>
                <form onSubmit={onSubmit}
                >
                    <div className="card-header" style={{
                        boxShadow: "rgb(243 243 243) 1px 0px 12px 2px",
                        background: "transparent",
                        borderBottom: "1px solid #eff2f5"
                    }}>
                        <div className="row justify-content-between">
                            <div className="col-lg-8 col-md-4 col-sm-2">
                            <span className="d-flex" style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                marginBottom: "10px"
                            }}>Register From</span>
                            </div>
                        </div>
                    </div>
                    {step}
                    <div className="card-footer d-flex justify-content-end gap-3"
                         style={{background: "transparent", borderTop: "1px solid #eff2f5"}}>
                        {!firstStep &&
                            <button type="button" style={{borderRadius: "15px",  borderColor: "transparent"}} className="btn btn-light btn-size btn_form-back"
                                    onClick={back}>Back</button>}
                        <button  type="submit" style={{
                            borderColor: "transparent", borderRadius: "15px",
                            backgroundColor: "#17a2b8d1",
                        }}
                                className="btn btn-primary btn-size btn_form-next">{lastStep ? 'Finish' : 'Next'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormBody;