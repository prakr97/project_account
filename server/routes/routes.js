import express from 'express';
import { addLoan, allLoan, addReceipt, pendingLoan, approveLoan, deleteLoan, allReceipt, pendingReceipt, approveReceipt, loginUser, addUser, addRole, roles, assignedUsers, users, getRole, editRole, getUser, editUser, getUserList, assigning, deleteUser } from '../user-controller/user-controller.js'

const router = express.Router();

router.post('/addLoan', addLoan)
router.get('/loanPending', pendingLoan)
router.delete('/deleteLoan/:id', deleteLoan)
router.post('/approveLoan/:id', approveLoan)
router.get('/loan', allLoan)
router.post('/addReceipt', addReceipt)
router.get('/receipt', allReceipt)
router.get('/receiptPending', pendingReceipt)
router.post('/approveReceipt', approveReceipt)
router.post('/login', loginUser)
router.post('/addUser', addUser)
router.post('/addRole', addRole)
// router.get('/agents', agents)
router.get('/roles', roles)
router.post('/assignedUsers', assignedUsers)
router.post('/:id', users)
router.get('/role/:id', getRole)
router.post('/role/:id', editRole)

router.get('/editUser/:id', getUser)
router.get('/userList', getUserList)
router.post('/editUser/:id', editUser)

router.post('/assigning', assigning)

router.delete('/:id', deleteUser)








export default router;