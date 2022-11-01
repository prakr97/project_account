import React from 'react'
import { useEffect, useState } from 'react'
import { getAllRoles } from '../service/api'
import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'

const Roles = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        allRoles();
    }, []);

    const allRoles = async () => {
        const response = await getAllRoles();
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
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Customers</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Customers</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            {/* Default box */}
                            <div className="card">

                                <div className="card-body p-0">
                                    <table className="table table-striped projects">
                                        <thead>
                                            <tr>

                                                <th style={{ width: '20%' }}>
                                                    Role
                                                </th>
                                               
                                                <th style={{ width: '20%' }}>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map(user => (
                                                    //     
                                                    <tr>

                                                        <td>
                                                            <p>
                                                                {user.role}
                                                            </p>

                                                        </td>
                                                        

                                                        <td className="project-actions text-right">
                                                            <a className="btn btn-primary btn-sm mx-1" href="#">
                                                                <i className="fas fa-folder mx-1">
                                                                </i>
                                                                View
                                                            </a>
                                                            <a className="btn btn-info btn-sm mx-1" href="#">
                                                                <i className="fas fa-pencil-alt mx-1">
                                                                </i>
                                                                Edit
                                                            </a>
                                                            <a className="btn btn-danger btn-sm" href="#">
                                                                <i className="fas fa-trash mx-1">
                                                                </i>
                                                                Delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </section>
                        {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}
                </div>
                {/* ./wrapper */}
            </div>

        </>
    )
}

export default Roles