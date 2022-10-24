import React from 'react';
import { useState } from 'react'
import { loginUser } from '../service/api.js'
import { useNavigate } from 'react-router-dom'


const defaultValue = {

  username: '',

  password: ''
}

const AddLogin = () => {

  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e)
    console.log(e.target.name, e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const addLoginDetails = async () => {
    await loginUser(user);
    navigate('/')
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">

          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Welcome</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" onChange={(e) => onValueChange(e)} name="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input type="Password" className="form-control" id="exampleInputEmail1" placeholder="Enter Password" onChange={(e) => onValueChange(e)} name="password" />
                </div>



              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={() => addLoginDetails()}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/* /.card */}
      </div>

    </div>
  );
}

export default AddLogin;