


import React from 'react';
import { useState, useEffect } from 'react'
import { editUser, getUser, getAllRoles } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'
import { useParams } from 'react-router-dom'

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
    createdDate: '',
    modifiedDate: new Date(),
    accessToken: '',
    refreshToken: ''

}



const EditUser = () => {
    const { id } = useParams();
    console.log(id)

    const [user, setUser] = useState(defaultValue);
    const [arole, setArole] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        getRole();
        loadUserDetail();
    }, []);

    const getRole = async () => {
        const response = await getAllRoles();
        setArole(response.data)
        console.log(response.data)
    }

    const loadUserDetail = async () => {
        const response = await getUser(id);
        setUser(response.data[0])
        console.log(response.data[0])
    }



    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async (e) => {
        e.preventDefault()
        await editUser(user, id);

        navigate('/')
    }

    return (


        <div className='wrapper'>
            <SideBar />
            <Header />

            <div className="content-wrapper" >
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
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e) => onValueChange(e)} name="name" value={user.name} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail2">Username</label>
                                                <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Enter username" onChange={(e) => onValueChange(e)} name="username" value={user.username} />
                                            </div>


                                            <div className="form-group">
                                                <label>Role</label>
                                                <select className="form-control" name='role' onChange={(e) => onValueChange(e)} value={user.role}>
                                                    {
                                                        arole.map(r => (

                                                            <option value={r.role}>{r.role}</option>
                                                        ))}


                                                </select>
                                            </div>



                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" onClick={(e) => editUserDetails(e)}>Submit</button>
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

export default EditUser;

