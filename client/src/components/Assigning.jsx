import React from 'react';
import { useState, useEffect } from 'react'
import { assigning, getUser, getUserList } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'
import { useParams } from 'react-router-dom'


const mystyle = {

    margin: 'auto',
    marginTop: '70px'
};

const assigning_def = {
    assigning_to: ''

}

// const mainUser_def = {
//     mainUser_username: ''

// }

const Assigning = () => {
    const { id } = useParams();
    console.log(id)

    const [userlist, setUserlist] = useState([]);
    // const [user, setUser] = useState(mainUser_def)

    useEffect(() => {
        getAllUserList();
        // getUserID();
    }, []);

    const getAllUserList = async () => {
        const response = await getUserList();
        setUserlist(response.data)
        console.log(response.data)
    }


    const navigate = useNavigate();

    const [assignedto, setAssignedto] = useState(assigning_def);

    const onValueChange = (e) => {
        // console.log(e.target.name)
        console.log(e.target.name, e.target.value)
        setAssignedto({ [e.target.name]: e.target.value })
        console.log(assignedto.assigning_to)
    }

    const assigningUser = async (e) => {
        // console.log(assignedto)
        e.preventDefault()
        await assigning(id, assignedto)
        navigate(-1)
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
                                        <h3 className="card-title">Assign To</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">

                                            <div className="form-group">
                                                <label>Assign to</label>
                                                <select className="form-control" name='assigning_to' onChange={(e) => onValueChange(e)}>
                                                    {
                                                        userlist.map(r => (

                                                            <option value={r.username}>{r.name}</option>
                                                        ))}


                                                </select>
                                            </div>


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#e63946', borderColor: '#e63946' }} onClick={(e) => assigningUser(e)}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                        </div></div></section>
            </div>

        </>
    )
}

export default Assigning;

