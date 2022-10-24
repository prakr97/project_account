


import React from 'react';
import { useState } from 'react'
import { addCustomer } from '../service/api.js'
// import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, FormControlLabel, RadioGroup, FormLabel, Radio } from '@mui/material';
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
    email: '',
    phone: '',
    age: '',
    gender: ''

}

const AddCustomer = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addCustomerDetails = async () => {
        await addCustomer(user);
        navigate('/')
    }

    return (
        <>
            {/* <Container>
                <Typography variant='h4'>Customer Details</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" />
                </FormControl>

                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" />
                </FormControl>
                <FormControl>
                    <InputLabel>Age</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="age" />
                </FormControl>

                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" name="gender" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" name="gender" />

                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => addCustomerDetails()}>Add Customer</Button>
                </FormControl>
            </Container> */}


            <SideBar />
            <Header />

            <div class="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-6" style={mystyle}>
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header" style={{ backgroundColor: '#e63946' }}>
                                        <h3 className="card-title">Add Customer</h3>
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
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={(e) => onValueChange(e)} name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Phone</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter phone number" onChange={(e) => onValueChange(e)} name="phone" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Age</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter age" onChange={(e) => onValueChange(e)} name="age" />
                                            </div>


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#e63946', borderColor: '#e63946' }} onClick={() => addCustomerDetails()}>Submit</button>
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

export default AddCustomer;

