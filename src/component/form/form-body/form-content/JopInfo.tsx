import React, {useCallback, useEffect, useState} from 'react';
import FormWrapper from "../FormWrapper";
import axios from "axios";

type JopInfoData = {
    department_name?: string,
    department_id?: string
    jop_name?: string
}

type DepData = {
    department_name?: string,
    department_id?: string
};

type JopInfoProps = JopInfoData & {
    updateData: (fields: Partial<JopInfoData>) => void
}
const JopInfo = ({department_name, department_id, jop_name, updateData}: JopInfoProps) => {
    const [departments, setDepartments] = useState<DepData[]>();




    //TODO:: get department from API backend project
    //TODO::add department value


    useEffect(() => {
        axios.get('http://frontend.test.local/index.php/api/site/department').then(res => {
            setDepartments(res.data)
            console.log(departments);
        })

            .catch(e => console.log(e))
    }, []);

    return (
        <FormWrapper title="Jop Info">
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Department</span>
                </div>
                <div className=" col-lg-6 col-md-2 col-sm-2 mb-2">
                    <select style={{color:"#585858"}}
                        className="form-select input__info" aria-label="Gender"
                        required
                        onChange={e => {
                            updateData({
                                department_id: e.target.value
                            })
                        }
                         }>
                        <option value="" disabled selected style={{color:"#585858"}} >Select department ...</option>

                        {departments?.map((department, index) => {
                            // const ob : DepData = {
                            //     department_name: department_name, department_id: department_id
                            // }
                            return (  <option data-select1-id={department.department_id}
                                           value={department.department_id}>{department.department_name}</option>);
                        })}
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-3 col-md-2 col-sm-2">
                    <span style={{fontSize: "18px"}}>Jop name</span>
                </div>
                <div className="col-lg-6 col-md-2 col-sm-2 mb-2">
                    <input value={jop_name} required
                           onChange={e => updateData({jop_name:e.target.value})}
                           type="text"
                           className="form-control input__info" id="title"
                           placeholder="jop name"/>
                </div>
            </div>
        </FormWrapper>
    );
}

export default JopInfo;