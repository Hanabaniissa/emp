import React, {useState} from 'react';
import FormWrapper from "../FormWrapper";
import {Button} from "@mui/material";
import axios, {toFormData} from "axios";

type AttacheFileProps = {}


const AttachFiles = (props: AttacheFileProps) => {
    const [state, setState] = useState<File | null>(null);
    const headers = {
        'Content-Type': 'application/json',
    }

    // const handleFileSelect = (event:React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files![0];
    //     setState(file);
    // };
    //
    // const handleSubmit = (event:React.ChangeEvent<HTMLInputElement) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("file", state?.text(););
    //
    // };
    // const formData = new FormData();
    // formData.append("file", state.file);


    // const [file, setFile] = useState(null);

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement) => {
    //     setFile(event.target.files[0]);
    // };

    // const handleSubmit = (event:  React.ChangeEvent<HTMLInputElement) => {
    //     event.preventDefault();
    //
    //     const formData = new FormData();
    //     formData.append('imageFile', file);
    //
    //     fetch('/api/upload-image', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log(error));
    // };

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('dd')
    //     const selectedFile = event.target.files?.[0];
    //     if (selectedFile) {
    //         setFile(selectedFile);
    //         console.log(selectedFile)
    //     }
    // };

    // const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     event.preventDefault();
    //     if (file) {
    //         console.log('ff')
    //         const formData = new FormData();
    //         formData.append("imageFile", file);
    //
    //         axios.post('http://frontend.test.local/index.php/api/site/create', formData)
    //             .then(res => console.log(res))
    //             .catch(e => console.log(e))
    //     }
    // };

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files![0];


        const reader = new FileReader();

        // @ts-ignore
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            console.log(event.target?.result)
            console.log('gg')
        }

        const formData = new FormData()
        formData.set('image', file)

    }

    function sendImage(dataURL: any) {
        // axios.post('http://frontend.test.local/index.php/api/site/create', , {
        //     headers: headers
        // })
        //     .then(res => console.log(res))
        //     .catch(e => console.log(e))
    }

        return (
            <FormWrapper title="Attache Files">
                <div className="row mb-3">
                    <div className="col-lg-3 col-md-2 col-sm-2">
                        <span style={{fontSize: "18px"}}>Upload image</span>
                    </div>
                    <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                        {/*<form onSubmit={handleSubmit}>*/}
                        <Button
                            variant="outlined"
                            component="label">
                            upload image
                            <input
                                type="file"
                                hidden onChange={handleFileChange}
                            />
                        </Button>
                        {/*<button className="btn btn-primary" onClick={handleSubmit}/>*/}
                        {/*</form>*/}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-lg-3 col-md-2 col-sm-2">
                        <span style={{fontSize: "18px"}}>Upload Files</span>
                    </div>
                    <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                        <Button
                            variant="outlined"
                            component="label"
                        >
                            Upload File
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                        {/*<input*/}
                        {/*       type="file"*/}
                        {/*       placeholder="image"/>*/}
                    </div>
                </div>
            </FormWrapper>
        );
    }

    export default AttachFiles;