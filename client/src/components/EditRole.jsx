


import React from 'react';
import { useState, useEffect } from 'react'
import { getRole, editRole } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'
import { useParams } from 'react-router-dom'


const mystyle = {

    margin: 'auto',
    marginTop: '70px'
};

const defaultValue = {
    role: ''

}

const EditRole = () => {
    const { id } = useParams();
    console.log(id)

    const [role, setRole] = useState(defaultValue);

    const navigate = useNavigate();

    useEffect(() => {
        loadRoleDetails();
    }, [])

    const loadRoleDetails = async () => {
        const response = await getRole(id);
        setRole(response.data[0]);
        console.log(response.data[0].role)
    }



    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setRole({ ...role, [e.target.name]: e.target.value })
    }

    const editRoleDetails = async (e) => {
        e.preventDefault()
        await editRole(role, id);
        navigate('/')
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
                            <div className="col-md-6" style={mystyle}>
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header" style={{ backgroundColor: '#e63946' }}>
                                        <h3 className="card-title">Edit Role</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Role</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e) => onValueChange(e)} name="role" value={role.role} />
                                            </div>




                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#e63946', borderColor: '#e63946' }} onClick={(e) => editRoleDetails(e)}>Edit</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                        </div></div>
                </section>
            </div>

        </>
    )
}

export default EditRole;

