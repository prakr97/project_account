import React from 'react'
import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'
import { useEffect, useState } from 'react'
import { approveReceipt, deleteReceipt, getPendingReceipt } from '../service/api'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import { Loan } from '../../../server/schema/schema'


const defaultValue = {
    receiptNumber: ''
}

const ReceiptPending = () => {


    const [listreceipt, setListreceipt] = useState([]);
    // const [superUser, setSuperUser] = useState(defaultValue)


    useEffect(() => {
        getAllReceipts();
    }, []);

    const getAllReceipts = async () => {
        const response = await getPendingReceipt();


        console.log(response.data);

        setListreceipt(response.data);
    }

    const [receiptNo, setReceiptNo] = useState(defaultValue)
    const deleteReceiptDetails = async (id) => {
        setReceiptNo({ receiptNumber: id })
        await deleteReceipt(receiptNo)
        getAllReceipts();
    }
    const approveReceiptDetails = async (id) => {
        console.log(id)
        setReceiptNo({ receiptNumber: { id } })
        await approveReceipt(receiptNo)
        getAllReceipts()
    }

    return (
        <>
            <Header />
            <SideBar />

            <div className="hold-transition sidebar-mini">
                {/* Site wrapper */}
                <div className="wrapper">
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">

                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    {/* <div className="col-sm-6">
                                        <h1>{superUser.id}</h1>
                                    </div> */}
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active">Receipt</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>


                        <section className="content">
                            {/* Default box */}
                            <div className="card card-solid">
                                <div className="card-body pb-0">
                                    <div className="row">
                                        {
                                            listreceipt.map(l => (
                                                // console.log(user.assignedUser.name), 
                                                // setAssign(user.assignedUser),
                                                <>
                                                    <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                                        <div className="card bg-light d-flex flex-fill  border border-info">
                                                            <div className="card-header text-muted border-bottom-0">
                                                                Receipt
                                                            </div>
                                                            {/* <Link to={'/assignedUsers/' + user.username} className='nav-link'> */}
                                                            <div className="card-body pt-0">
                                                                <div className="row">
                                                                    <div className="col-7">
                                                                        <h2 className="lead"><b>{l.toCustomer}</b></h2>
                                                                        <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                            <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Amount: {l.loanNumber}</li>
                                                                            <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Amount: {l.amt}</li>

                                                                            {/* <Link to={`/addLoan/${user.username}`} className=" row mx-0 fa-solid fa-user-pen text-success">Aprove</Link> */}

                                                                            <Link onClick={() => approveReceiptDetails(l.receiptNumber)} className="fa-solid fa-user-pen mx-2 text-success">Approve</Link>


                                                                            <Link onClick={() => deleteReceiptDetails(l.receiptNumber)} className="fa-solid fa-user-pen mx-2 text-danger">Delete</Link>
                                                                        </ul>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            {/* </Link> */}
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>
                            {/* /.card */}
                        </section>
                        {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}
                </div>
            </div>

        </>
    )
}

export default ReceiptPending