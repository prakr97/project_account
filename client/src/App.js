
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
import Loans from './components/Loans';
import Receipt from './components/Receipt';
import LoanPending from './components/LoanPending';
import ReceiptPending from './components/ReceiptPending';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/addLoan/:id' element={<AddLoan />} />
          <Route path='/loans' element={<Loans />} />
          <Route path='/loanPending' element={<LoanPending />} />

          <Route path='/addReceipt/:id' element={<AddReceipt />} />
          <Route path='/receipt' element={<Receipt />} />
          <Route path='/receiptPending' element={<ReceiptPending />} />

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
