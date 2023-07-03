import React from 'react';
import {Skeleton, Typography} from "@mui/material";

const FormLoading = () => {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: "70px"}}>
            <div className="card" style={{
                width: "70%",
                height: "auto",
                border: "0",
                boxShadow: "rgb(222 222 222) 7px 9px 26px 1px"
            }}>
                <div className="card-header" style={{
                    boxShadow: "rgb(243 243 243) 1px 0px 12px 2px",
                    background: "transparent",
                    borderBottom: "1px solid #eff2f5"
                }}>
                    <div className="row justify-content-between">
                        <div>
                            <span className="d-flex" style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                marginBottom: "10px"
                            }}>  <Skeleton variant="rectangular" width={800} height={55}/> </span>
                        </div>
                    </div>
                </div>
                <h2 style={{
                    padding: "15px 15px 10px 15px",
                    margin: 0,
                    fontSize: "22px",
                    borderBottom: "1px solid #eff2f5",
                }}><Typography variant="h3"><Skeleton/></Typography></h2>
                <div className="card-body d-flex flex-column justify-content-center align-center">
                    <div className="row mb-3">
                        <div className="col-lg-3 col-md-2 col-sm-2">
                            <Typography variant="h3"><Skeleton/></Typography>
                        </div>
                        <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                            <Typography variant="h3"><Skeleton/></Typography>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-3 col-md-2 col-sm-2">
                            <Typography variant="h3"><Skeleton/></Typography>
                        </div>
                        <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                            <Typography variant="h3"><Skeleton/></Typography>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-3 col-md-2 col-sm-2">
                            <Typography variant="h3"><Skeleton/></Typography>
                        </div>
                        <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                            <Typography variant="h3"><Skeleton/></Typography>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end gap-3"
                     style={{background: "transparent", borderTop: "1px solid #eff2f5"}}>
                    <Skeleton variant="rectangular" width={86} height={41}/> <Skeleton
                    variant="rectangular" width={86} height={41}/>
                </div>
            </div>
            {/*<Typography variant="h1"><Skeleton/></Typography>*/}
            {/*<Typography variant="h3"><Skeleton/></Typography>*/}
            {/*<Skeleton variant="rectangular" width={86} height={41}/>*/}
            {/*<Typography variant="h5"><Skeleton/></Typography>*/}
        </div>
    );
}

export default FormLoading;