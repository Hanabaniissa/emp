import React, {FormEvent, Fragment, useEffect, useState} from 'react';
import Steps from "./steps/Steps";
import './form.css'
import FormBody from "./form-body/FormBody";
import {useMultiFrom} from "../../hooks/useMultiFrom";
import PersonalInfo from "./form-body/form-content/PersonalInfo";
import AddressInfo from "./form-body/form-content/AddressInfo";
import AttachFiles from "./form-body/form-content/AttachFiles";
import ContactInfo from "./form-body/form-content/ContactInfo";
import Swal from 'sweetalert2'
import JopInfo from "./form-body/form-content/JopInfo";
import axios from "axios";

export type FormData = {
    first_name: string,
    last_name: string,
    age: string,
    gender: string,
    city: string,
    street: string,
    neighborhood: string
    email: string,
    phone_number: string,
    department_name: string,
    department_id: string,
    jop_name: string
}

const INITIAL_DATA: FormData = {
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
    city: '',
    street: '',
    neighborhood: '',
    email: '',
    phone_number: '',
    department_name: "",
    department_id: "",
    jop_name: "",
}


export type FormSent = {
    first_name: string,
    last_name: string,
    age: number,
    location: string,
    gender: string,
    email: string,
    phone_number: number,
    department_id: number,
    jop_name: string,

}

const headers = {
    'Content-Type': 'application/json',
}
const Form = () => {
    const [data, setData] = useState<FormData>(INITIAL_DATA)
    const [dataApi, setDataApi] = useState<FormSent>()
    const {back, next, lastStep, firstStep, step, steps, goTo, currentStepIndex} = useMultiFrom([
        <JopInfo {...data} updateData={updateData}/>,
        <PersonalInfo {...data} updateData={updateData}/>,
        <AddressInfo {...data} updateData={updateData}/>,
        <ContactInfo {...data} updateData={updateData}/>,
        <AttachFiles/>
    ]);

    function updateData(fields: Partial<FormData>) {
        setData(prev => {
            return {...prev, ...fields}
        })
        console.log(data)
    }

    const DataApi = () => {
        setDataApi(
            prev => {
                return {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    age: parseInt(data.age),
                    email: data.email,
                    phone_number: parseInt(data.phone_number),
                    gender: data.gender,
                    jop_name: data.jop_name,
                    // jop_name: data.jop_name,
                    location: data.city + data.street + data.neighborhood,
                    department_id: parseInt(data.department_id),
                }
            }
        )
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!lastStep) return next()

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary btn-size mr-ml',
                cancelButton: 'btn btn-light btn-size'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be submit this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Great Jop!',
                    'Your file has been submitted.',
                    'success'
                )
                DataApi();
                console.log("hh")
                console.log(dataApi);

                axios.post("http://frontend.test.local/index.php/api/site/create", dataApi,
                    // {headers: headers}
                    // dataApi
                ).then(res => console.log(res)).catch(e => console.log(e))
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    '',
                    'error'
                )
            }
        })
    }

    return (
        <>
            <div style={{backgroundColor: "rgb(240 240 240)"}}>
                <div className="form-container">
                    <Steps currentStepIndex={currentStepIndex} steps={steps}/>
                    {/*<FormLoading/>*/}
                    <FormBody onSubmit={onSubmit} step={step} back={back} firstStep={firstStep} lastStep={lastStep}
                              next={next}/>
                </div>
            </div>

        </>
    )
        ;
}

export default Form;