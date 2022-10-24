


import React from 'react';
import { useState } from 'react'
import { addAgent } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'

const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial"
    margin: 'auto',
    marginTop: '70px'
};

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    houseNo: '',
    streetName: '',
    state: '',
    city: '',
    district: '',
    pincode: '',
    isAdmin: 'false',
    isAgent: 'true',
    isAcc: 'false',
    accessToken: '',
    refreshToken: ''
}

const AddAgent = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addAgentDetails = async () => {
        await addAgent(user);
        navigate('/')
    }

    return (
        <div className='wrapper'>
            <Header />
            <SideBar />


            <div class="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-6" style={mystyle}>
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header" style={{ backgroundColor: '#6a4c93' }}>
                                        <h3 className="card-title">Agent Details</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e) => onValueChange(e)} name="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Username</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="username" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={(e) => onValueChange(e)} name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Phone</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter phone number" onChange={(e) => onValueChange(e)} name="phone" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" onChange={(e) => onValueChange(e)} />
                                            </div>

                                            <label>--- Address Details ---</label><br />
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">House Number</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="houseNo" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Street Name</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="streetName" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">State</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="state" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">City</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="city" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">District</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="district" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Pincode</label>
                                                <input type="string" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="pincode" />
                                            </div>


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#6a4c93', borderColor: '#6a4c93' }} onClick={() => addAgentDetails()}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                        </div></div></section></div>

        </div>
    )
}

export default AddAgent;

