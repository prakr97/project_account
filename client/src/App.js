
import './App.css';
import AddAgent from './components/AddAgent';
import Dashboard from './components/Dashboard';
// import NavBar from './components/NavBar';
import AddCustomer from './components/AddCustomer';
import AddLoan from './components/AddLoan';
import AddAccountant from './components/AddAccountant';
import AddReceipt from './components/AddReceipt';
import AddLogin from './components/Login';
import Logout from './components/Logout';
import Customers from './components/Customers';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Agents from './components/Agents';
import Accountants from './components/Accountant';
import User from './components/User';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addAgent' element={<AddAgent />} />
          <Route path='/addCustomer' element={<AddCustomer />} />
          <Route path='/addLoan' element={<AddLoan />} />
          <Route path='/addAccountant' element={<AddAccountant />} />
          <Route path='/addReceipt' element={<AddReceipt />} />
          <Route path='/login' element={<AddLogin />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/accountants' element={<Accountants />} />
          <Route path='/addUser' element={<User />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
