


import React from 'react';
import { useState } from 'react'
import { addLoan } from '../service/api.js'
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
    loanId: '',
    loanNumber: '',
    amt: '',
    duration: ''

}

const AddLoan = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addLoanDetails = async () => {
        await addLoan(user);
        navigate('/')
    }

    return (
        <>
            {/* <Container>
                <Typography variant='h4'>Loan Details</Typography>
                <FormControl>
                    <InputLabel>Loan Id</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="loanId" />
                </FormControl>

                <FormControl>
                    <InputLabel>Loan Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="loanNumber" />
                </FormControl>
                <FormControl>
                    <InputLabel>Amount</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="amt" />
                </FormControl>
                <FormControl>
                    <InputLabel>Duration</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="duration" />
                </FormControl>

                <FormControl>
                    <Button variant="contained" onClick={() => addLoanDetails()}>Add Loan</Button>
                </FormControl>
            </Container> */}


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
                                                <label htmlFor="exampleInputEmail1">Loan Id</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Loan Id" onChange={(e) => onValueChange(e)} name="loanId" />
                                            </div>
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
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#277da1', borderColor: '#277da1' }} onClick={() => addLoanDetails()}>Submit</button>
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

