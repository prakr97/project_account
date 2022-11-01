import React from 'react'
import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'
import { useEffect, useState } from 'react'
import { getAgents } from '../service/api'
import { Link } from 'react-router-dom'

const defaultValue = {
    role: '',
    name: ''
}

const Agents = () => {

    const [users, setUsers] = useState([]);
    const [superUser, setSuperUser] = useState(defaultValue)

    useEffect(() => {
        getAllAgents();
    }, []);

    const getAllAgents = async () => {
        const response = await getAgents();
        // console.log(response);

        console.log(response.data);
        
        setUsers(response.data);
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
                                        <h1>Agents</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active">Agents</li>
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
                                                // console.log(user.assignedUser.name), 
                                                // setAssign(user.assignedUser),
                                                <>
                                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                                    <div className="card bg-light d-flex flex-fill  border border-info">
                                                        <div className="card-header text-muted border-bottom-0">
                                                            Agent
                                                        </div>
                                                <Link to={'/assignedUsers/'+user.username} className='nav-link'>
                                                        <div className="card-body pt-0">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <h2 className="lead"><b>{user.name}</b></h2>
                                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Username: {user.username}</li>
                                                                        {/* <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Customers: </li> */}
                                                                        {/* {user.assignedUser.map(ass => (
                                                                        <li className="small"><span className="fa-li"></span> {ass.name}</li>))} */}
                                                                    </ul>
                                                                </div>
                                                                <div className="col-5 text-center">
                                                                    <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                </Link>
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

export default Agents