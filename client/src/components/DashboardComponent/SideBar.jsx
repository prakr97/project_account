


import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { allroleaccess, getAllRoles, logout } from '../../service/api';
// import { logout } from '../../service/auth-header';


export default function SideBar() {

    // const { component } = props
    // console.log(component)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        allRoles();
    }, []);

    const allRoles = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await allroleaccess(user.role);
        setUsers(response.data[0].accessTo);
        console.log(response.data[0].accessTo);
    }

    const logoutUser = () => {
        logout()
        window.location.reload();

    }
    return (
        <div className="hold-transition sidebar-mini layout-fixed">
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}

                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link onClick={() => logoutUser()} className="d-block">Logout</Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Forms
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    



                                </ul>
                            </li> */}

                            <li className="nav-item">
                                <NavLink to='/addUser' className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>Add User</p>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/addRole' className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>Add Role</p>
                                </NavLink>
                            </li>



                            <li className="nav-item">
                                <NavLink to='/roles' className="nav-link">
                                    <i class="nav-icon fa fa-id-card" aria-hidden="true"></i>
                                    <p>Roles</p>
                                </NavLink>
                            </li>

                            {
                                users.map(user => (
                                    <li className="nav-item">
                                        <NavLink to={'/' + user.role} className="nav-link">
                                            <i className="nav-icon fas fa-user-tie" />
                                            <p>{user.role}</p>
                                        </NavLink>
                                    </li>
                                ))}



                            <li className="nav-item">
                                <NavLink to='/loans' className="nav-link">
                                    <i className="nav-icon fas fa-address-book" />
                                    <p>Loans</p>
                                </NavLink>
                            </li>



                            <li className="nav-item">
                                <NavLink to='/loanPending' className="nav-link">
                                    <i className="nav-icon fas fa-address-book" />
                                    <p>Pending Loans</p>
                                </NavLink>
                            </li>




                            <li className="nav-item">
                                <NavLink to='/receipt' className="nav-link">
                                    <i className="nav-icon fas fa-receipt" />
                                    <p>Receipt</p>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/receiptPending' className="nav-link">
                                    <i className="nav-icon fas fa-receipt" />
                                    <p>Pending Receipt</p>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

        </div>
    )
}
