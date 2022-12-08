
import './App.css';
import { BrowserRouter, Routes, Route, Router, useLocation, Navigate } from 'react-router-dom'

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
import ProtectedRoutes from './components/ProtectedRoutes';
import { useEffect, useState } from 'react';


function App() {

  const [user, setUser] = useState('')
  // const location = useLocation()
  // const navigate = useNavigate()
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
    console.log(user.role)

  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />} >
            <Route path='/' element={<Dashboard />} />
            <Route path='/addLoan/:id' element={<AddLoan />} />
            <Route path='/addUser' element={<AddUserInfo />} />
            <Route path='/addRole' element={<AddRole />} />
            <Route path='/addReceipt/:id' element={<AddReceipt />} />

            <Route path='/editUser/:id' element={<EditUser />} />
            <Route path='/editRole/:id' element={<EditRole />} />

            <Route path='/loans' element={<Loans />} />
            <Route path='/roles' element={<Roles />} />
            <Route path='/receipt' element={<Receipt />} />
            {/* <>

              {
                user.role === 'admin' || user.role === 'accountant' ? <Route path='/loanPending' element={<LoanPending />} /> : <Route path='/' element={<Dashboard />} />
              }
            </>

            <>

              {
                user.role === 'admin' || user.role === 'agent' ? <Route path='/receiptPending' element={<ReceiptPending />} /> : <Route path='/' element={<Dashboard />} />
              }
            </> */}

            <Route path='/loanPending' element={<LoanPending />} />
            <Route path='/receiptPending' element={<ReceiptPending />} />

            <Route path='/login' element={<AddLogin />} />
            <Route path='/:id' element={<Users />} />

            <Route path='/assignedUsers/:id' element={<AssignedUser />} />
            <Route path='/assigning/:id' element={<Assigning />} />

          </Route>





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
