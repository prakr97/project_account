import express from 'express';
import { addLoan, addReceipt, loginUser, customers, agents, accountants, addUser, addRole, role, assignedUsers } from '../user-controller/user-controller.js'

const router = express.Router();

router.post('/addLoan', addLoan)
router.post('/addReceipt', addReceipt)
router.post('/login', loginUser)
router.post('/addUser', addUser)
router.post('/addRole', addRole)
router.get('/customers', customers)
router.get('/agents', agents)
router.get('/accountants', accountants)
router.get('/role', role)
router.post('/assignedUsers', assignedUsers)





export default router;