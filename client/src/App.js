
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import AddLoan from './components/AddLoan';
import AddReceipt from './components/AddReceipt';
import AddLogin from './components/Login';

import AddUserInfo from './components/AddUserInfo';
import Roles from './components/Roles';
import AddRole from './components/AddRole';
import AssignedUser from './components/AssignedUser';
import Users from './components/Users';
import EditRole from './components/EditRole';
import EditUser from './components/EditUser';
import Assigning from './components/Assigning';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/addLoan' element={<AddLoan />} />
          <Route path='/addReceipt' element={<AddReceipt />} />
          <Route path='/login' element={<AddLogin />} />
          <Route path='/:id' element={<Users />} />
          <Route path='/editUser/:id' element={<EditUser />} />

          <Route path='/addUser' element={<AddUserInfo />} />
          <Route path='/addRole' element={<AddRole />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/editRole/:id' element={<EditRole />} />

          <Route path='/assignedUsers/:id' element={<AssignedUser />} />
          <Route path='/assigning/:id' element={<Assigning />} />







        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
