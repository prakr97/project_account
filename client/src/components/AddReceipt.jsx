


import React from 'react';
import { useState } from 'react'
import { addReceipt } from '../service/api.js'
import { useNavigate } from 'react-router-dom'
import SideBar from './DashboardComponent/SideBar'
import Header from './DashboardComponent/Header'
import { useParams } from 'react-router-dom'


const mystyle = {

    margin: 'auto',
    marginTop: '70px',

};



const AddReceipt = () => {
    const { id } = useParams();
    console.log(id)

    const defaultValue = {
        toCustomer: id,
        loanNumber: '',
        receiptNumber: '',
        amt: '',
        approve: false
    }

    const [receipt, setReceipt] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        setReceipt({ ...receipt, [e.target.name]: e.target.value })
    }

    const addReceiptDetails = async (e) => {
        e.preventDefault();
        await addReceipt(receipt);
        navigate('/receipt')
    }

    return (
        <>

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
                                    <div className="card-header" style={{ backgroundColor: '#2a9d8f' }}>
                                        <h3 className="card-title">Receipt Details</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body" >

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Loan Number</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Loan Number" onChange={(e) => onValueChange(e)} name="loanNumber" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Receipt Number</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Receipt Number" onChange={(e) => onValueChange(e)} name="receiptNumber" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Amount</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Receipt Amount" onChange={(e) => onValueChange(e)} name="amt" />
                                            </div>



                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer" >
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#2a9d8f', borderColor: '#2a9d8f' }} onClick={(e) => addReceiptDetails(e)}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                        </div></div></section></div>

        </>
    )
}

export default AddReceipt;

