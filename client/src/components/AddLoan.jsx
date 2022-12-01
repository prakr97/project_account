


import React from 'react';
import { useState } from 'react'
import { addLoan } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';


const mystyle = {

    margin: 'auto',
    marginTop: '70px'
};



const AddLoan = () => {

    const { id } = useParams();
    console.log(id)

    const defaultValue = {

        loanNumber: '',
        amt: '',
        duration: '',
        toCustomer: id,
        approve: false

    }


    const [user, setUser] = useState(defaultValue);
    // user.toCustomer = id

    const navigate = useNavigate();

    console.log(user.toCustomer)

    // useEffect(() => {
    //     setUser({ ...user, toCustomer: id })
    // }, []);

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addLoanDetails = async (e) => {
        e.preventDefault()
        // setUser({ ...user, toCustomer: id })
        await addLoan(user);
        navigate('/loans')
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
                                    <div className="card-header" style={{ backgroundColor: '#277da1' }}>
                                        <h3 className="card-title">Loan Details</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Loan Number</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Loan Number" onChange={(e) => onValueChange(e)} name="loanNumber" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Amount</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Loan Amount" onChange={(e) => onValueChange(e)} name="amt" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Duration</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Duration" onChange={(e) => onValueChange(e)} name="duration" />
                                            </div>


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#277da1', borderColor: '#277da1' }} onClick={(e) => addLoanDetails(e)}>Submit</button>
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

export default AddLoan;

