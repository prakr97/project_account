import React from 'react';
import { useState, useEffect } from 'react'
import { assigning, getUser, getUserList } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'
import { useParams } from 'react-router-dom'


const mystyle = {

    margin: 'auto',
    marginTop: '70px'
};

// const defaultValue = {
//     role: ''

// }

const Assigning = () => {
    const { id } = useParams();
    // console.log(id)

    const [userlist, setUserlist] = useState([]);
    const [user, setUser] = useState('')

    useEffect(() => {
        getAllUserList();
        getUserID();
    }, [1]);

    const getAllUserList = async () => {
        const response = await getUserList();
        setUserlist(response.data)
        console.log(response.data)
    }

    const getUserID = async () => {
        const response = await getUser(id)
        console.log(response.data[0].username)
        setUser(response.data[0].username)
    }

    const [assignedto, setAssignedto] = useState('');

    // const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setAssignedto({ ...assignedto, [e.target.name]: e.target.value })
        console.log("ho" + assignedto)
    }

    const assigningUser = async () => {
        // console.log(assignedto)
        await assigning(user, assignedto)
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
                                                <select className="form-control" name='st' onChange={(e) => onValueChange(e)}>
                                                    {
                                                        userlist.map(r => (

                                                            <option value={r.username}>{r.name}</option>
                                                        ))}


                                                </select>
                                            </div>


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#e63946', borderColor: '#e63946' }} onClick={() => assigningUser()}>Submit</button>
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

