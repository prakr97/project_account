import React from 'react'
import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'
import { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../service/api'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const defaultValue = {
    id: ''
}

const Users = () => {
    const id = useParams();
    console.log(id)

    const [users, setUsers] = useState([]);
    const [superUser, setSuperUser] = useState(defaultValue)


    useEffect(() => {
        getAllUsers();
    }, [id]);

    const getAllUsers = async () => {
        const response = await getUsers(id);
        setSuperUser(id)
        console.log(superUser)
        // console.log(response);

        console.log(response.data);

        setUsers(response.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
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
                                        <h1>{superUser.id}</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active">{superUser.id}</li>
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
                                                                {superUser.id}
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="row">
                                                                    <div className="col-7">
                                                                        <h2 className="lead"><b>{user.name}</b></h2>
                                                                        <Link to={`/assignedUsers/${user.username}`} className='nav-link'>
                                                                            <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                                <li className="small"><span className="fa-li"><i className="fas fa-lg fa-envelope" /></span> Username: {user.username}</li>

                                                                            </ul>
                                                                        </Link>


                                                                        <Link to={`/editUser/${user.username}`} className="fa-solid fa-user-pen ">Edit</Link>


                                                                        <Link onClick={() => deleteUserDetails(user._id)} className="fa-solid fa-user-pen mx-2 text-danger">Delete</Link>

                                                                        <Link to={`/assigning/${user.username}`} className="fa-solid fa-user-pen text-warning 2">Assign</Link>

                                                                        {superUser.id === 'customer' &&

                                                                            <Link to={`/assigning/${user.username}`} className=" row mx-0 fa-solid fa-user-pen text-success">Loan</Link>
                                                                        }



                                                                    </div>
                                                                    <div className="col-5 text-center">
                                                                        <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid" />
                                                                    </div>
                                                                </div>
                                                            </div>

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

export default Users