import express from 'express';
import { addLoan, addReceipt, loginUser, addUser, addRole, roles, assignedUsers, users, getRole, editRole, getUser, editUser, getUserList, assigning, deleteUser } from '../user-controller/user-controller.js'

const router = express.Router();

router.post('/addLoan', addLoan)
router.post('/addReceipt', addReceipt)
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