


import React from 'react';
import { useState, useEffect } from 'react'
import { addUserInfo, getAllRoles } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'

const mystyle = {
   
    margin: "auto"
};

const defaultValue = {
    name: '',
    username: '',
    password: '',
    role: '',
    assignedUser: [],
    status: 'false',
    createdDate: new Date(),
    modifiedDate: '',
    accessToken: '',
    refreshToken: ''

}



const AddUserInfo = () => {

    const [user, setUser] = useState(defaultValue);
    const [arole, setArole] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        getRole();
    }, []);

    const getRole = async()=> {
        const arole = await getAllRoles();
        setArole(arole.data)
        console.log(arole.data)
    }


    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {

        await addUserInfo(user);
        
        navigate('/')
    }

    return (


        <div className='wrapper'>
            <SideBar />
            <Header />

            <div class="content-wrapper" >
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-6" style={mystyle}>
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">User Details</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e) => onValueChange(e)} name="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail2">Username</label>
                                                <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="username" />
                                            </div>



                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" onChange={(e) => onValueChange(e)} name="password"/>
                                            </div>

                                           
                                            
                                                {/* select */}
                                                <div className="form-group">
                                                    <label>Role</label>
                                                    <select className="form-control" name='role' onChange={(e) => onValueChange(e)}>
                                                        {
                                                        arole.map(r => (

                                                        <option  value={r.role}>{r.role}</option>
                                                        ))}
                                                        
                                                        
                                                    </select>
                                                </div>
                                           


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" onClick={() => addUserDetails()}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                        </div></div></section>
            </div>

        </div>
    )
}

export default AddUserInfo;

