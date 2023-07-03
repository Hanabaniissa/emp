import React from 'react';
import FormWrapper from "../FormWrapper";

type ContactData = {
    email: string,
    phone_number: string
}
type ContactProps = ContactData & {
    updateData: (fields: Partial<ContactData>) => void
}

const ContactInfo = ({email, phone_number, updateData}: ContactProps) => {
    return (
        <FormWrapper title="Contact Info">
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Your email</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={email} required
                           onChange={e => updateData({email: e.target.value})}
                           type="email"
                           className="form-control input__info" id="title"
                           placeholder="email"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Phone number</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <div className="input-group input-group-solid mb-5">
                        <span className="input-group-text" id="basic-addon1">
                            <img className="w-25 "
                                 // src="https://opensooqui2.os-cdn.com/mobileV2/icons/medium/CircularFlags/jo.png"
                            />
                        </span>
                        <input value={phone_number} required
                               onChange={e => updateData({phone_number: e.target.value})}
                               type="number"
                               className="form-control input__info" id="title"
                               placeholder="phone number"/>

                    </div>
                </div>
            </div>
        </FormWrapper>
    );
}
export default ContactInfo;