import React from 'react';
import FormWrapper from "../FormWrapper";

type PersonalInfoData = {
    first_name: string,
    last_name: string,
    age: string,
    gender: string,
}
type PersonalInfoProps = PersonalInfoData & {
    updateData: (fields: Partial<PersonalInfoData>) => void
}

const PersonalInfo = ({first_name, last_name, age, updateData}: PersonalInfoProps) => {
    return (
        <FormWrapper title="Personal Info">
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>First Name</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={first_name} required
                           onChange={e => updateData({first_name: e.target.value})}
                           type="text"
                           className="form-control input__info" id="title"
                           placeholder="first name"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Last Name</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={last_name}
                           required
                           onChange={e => updateData({last_name: e.target.value})}
                           type="text"
                           className="form-control input__info" id="title"
                           placeholder="last name"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Age</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={age} required type='number'
                           onChange={e => updateData({age: e.target.value})}
                           className="form-control input__info" id="title"
                           placeholder="age"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Gender</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <select className="form-select input__info " aria-label="Gender"
                            required
                            onChange={e => updateData({gender: e.target.value})} style={{color:"#585858"}}>
                        <option value="" disabled selected style={{color:"#585858"}} >Select gender ...</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
            </div>
        </FormWrapper>
    );
}
export default PersonalInfo;