import React from 'react'
import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'
import { useEffect, useState } from 'react'
import { getAccountants } from '../service/api'

const Accountants = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllAccountants();
    }, []);

    const getAllAccountants = async () => {
        const response = await getAccountants();
        setUsers(response.data);
        console.log(response.data);
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
                                    <div className="col-sm-6">
                                        <h1>Accountants</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active">Accountants</li>
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
                                            users.map(user => (
                                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                                    <div className="card bg-light d-flex flex-fill  border border-warning">
                                                        <div className="card-header text-muted border-bottom-0">
                                                            Agent
                                                        </div>
                                                        <div className="card-body pt-0">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <h2 className="lead"><b>{user.name}</b></h2>
                                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Email: {user.email}</li>
                                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone: {user.phone}</li>
                                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: {user.houseNo}, {user.city}, {user.pincode}</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-5 text-center">
                                                                    <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
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

export default Accountants