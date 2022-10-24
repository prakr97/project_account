import express from 'express';
import { addAgent, addCustomer, addLoan, addAccountant, addReceipt, loginUser, customers, agents, accountants } from '../user-controller/user-controller.js'

const router = express.Router();

router.post('/addAgent', addAgent)
router.post('/addCustomer', addCustomer)
router.post('/addLoan', addLoan)
router.post('/addAccountant', addAccountant)
router.post('/addReceipt', addReceipt)
router.post('/login', loginUser)
router.get('/customers', customers)
router.get('/agents', agents)
router.get('/accountants', accountants)


// router.post('/refresh', refreshToken)
// router.post('/logout', logoutSession)
// router.get('/', getUsers)
// router.get('/:id', getUser)
// router.post('/:id', editUser)
// router.delete('/:id', deleteUser)
// router.post('/login', verifyUser)

export default router;