
import './App.css';
import Dashboard from './components/Dashboard';
// import NavBar from './components/NavBar';
import AddLoan from './components/AddLoan';
import AddReceipt from './components/AddReceipt';
import AddLogin from './components/Login';
import Customers from './components/Customers';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Agents from './components/Agents';
import Accountants from './components/Accountant';
import AddUserInfo from './components/AddUserInfo';
import Roles from './components/Roles';
import AddRole from './components/AddRole';
import AssignedUser from './components/AssignedUser';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/addLoan' element={<AddLoan />} />
          <Route path='/addReceipt' element={<AddReceipt />} />
          <Route path='/login' element={<AddLogin />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/accountants' element={<Accountants />} />
          <Route path='/addUser' element={<AddUserInfo />} />
          <Route path='/addRole' element={<AddRole />} /> 
          <Route path='/role' element={<Roles />} />
          <Route path='/assignedUsers/:id' element={<AssignedUser />}/>
            
          




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
