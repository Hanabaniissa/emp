import React from 'react';
import FormWrapper from "../FormWrapper";

type AddressData = {
    city: string,
    street: string,
    neighborhood: string
}
type AddressProps = AddressData & {
    updateData: (fields: Partial<AddressData>) => void
}

const AddressInfo = ({city, street, neighborhood, updateData}: AddressProps) => {
    return (
        <FormWrapper title="Address Info">
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>City</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={city} required
                           onChange={e => updateData({city: e.target.value})}
                           type="text"
                           className="form-control input__info" id="title"
                           placeholder="city"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Neighborhood</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={neighborhood} required
                           onChange={e => updateData({neighborhood:e.target.value})}
                           type="text"
                           className="form-control input__info" id="title"
                           placeholder="neighborhood"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Street</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={street} required
                           onChange={e => updateData({street:e.target.value})}
                           type="text"
                           className="form-control input__info" id="title"
                           placeholder="street"/>
                </div>
            </div>


        </FormWrapper>
    );
}

export default AddressInfo;