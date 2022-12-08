


import React, { useEffect } from 'react';
import { useState } from 'react'
import { addRole, getAllRoles } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'

const roleStyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial"
    margin: 'auto',
    marginTop: '70px',

};
const rolesListStyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial"
    margin: 'auto',
    // marginTop: '70px',
    display: 'flex',
    justifyContent: 'center'
};

const defaultValue = {
    role: ''

}

const AddRole = () => {

    const [role, setRole] = useState(defaultValue);
    const [rolesList, setrolesList] = useState([]);
    const [selectRoles, setSelectRoles] = useState([]);
    useEffect(() => {
        allRoles();
    }, []);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setRole({ ...role, [e.target.name]: e.target.value })
    }

    const handleChange = (rolez) => {

        console.log('The checkbox was toggled');
        console.log(rolez)

    };

    const addRoleDetails = async () => {
        await addRole(role);
        console.log("hi simple")
        navigate('/')
    }


    const allRoles = async () => {
        const response = await getAllRoles();
        setrolesList(response.data);
    }

    return (
        <>


            <SideBar />
            <Header />

            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-6" style={roleStyle}>
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header" style={{ backgroundColor: '#e63946' }}>
                                        <h3 className="card-title">Add Role</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Role</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e) => onValueChange(e)} name="role" />
                                            </div>




                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#e63946', borderColor: '#e63946' }} onClick={() => addRoleDetails()}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div classname="justify-content-center">


                        <div className="row" style={rolesListStyle}>
                            <div className="col-md-6">
                                {/* /.card */}
                                <div className="card card-info">
                                    <div className="card-header">
                                        <h3 className="card-title">Grant Access (backend not set)</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Roles</th>

                                                    <th />
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {
                                                    rolesList.map(r => (
                                                        <tr>
                                                            <td>{r.role}</td>

                                                            <td>
                                                                <div className="check-primary">
                                                                    <input type="checkbox" id="check3" onChange={handleChange} />
                                                                    {/* <label htmlFor="check1" /> */}
                                                                </div>

                                                            </td>

                                                        </tr>
                                                    ))
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </>
    )
}

export default AddRole;

