// import { response } from 'express';
import { Loan, Receipt, User, Role } from '../schema/schema.js'

// import { token } from '../schema/token.js'

import { hash } from 'bcrypt';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const addUser = async (request, response) => {
    const user = request.body;
    const securePassword = await hash(request.body.password, 10)
    request.body.password = securePassword
    const newUser = new User(user);
    try {
        await newUser.save()
        response.status(200).json(newUser);
    } catch {
        response.status(400).json({ message: error.message })
    }
}


export const addRole = async (request, response) => {
    const role = request.body;
    const newRole = new Role(role);
    try {
        await newRole.save()
        response.status(200).json(newRole);
    } catch {
        response.status(400).json({ message: error.message })
    }
}


export const addLoan = async (request, response) => {
    const loan = request.body;
    const newLoan = new Loan(loan);
    try {
        await newLoan.save()
        response.status(200).json(newLoan);
    } catch {
        response.status(400).json({ message: error.message })
    }
}



export const addReceipt = async (request, response) => {
    const receipt = request.body;
    const newReceipt = new Receipt(receipt);
    try {
        await newReceipt.save()
        response.status(200).json(newReceipt);
    } catch {
        response.status(400).json({ message: error.message })
    }
}


//token generate isAdmin: user.isAdmin
const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id },
        "mysecretcode",
        { expiresIn: "15m" });
}

const generateRefreshToken = (user) => {

    return jwt.sign({ id: user.id },
        "myrefreshcode");

}


export const roles = async (request, response) => {
    try {
        const rolesList = await Role.find({});
        response.status(200).json(rolesList);
    } catch {
        response.status(405).json({ message: error.message })
    }
}

export const allLoan = async (request, response) => {
    try {
        const LoanList = await Loan.find({ approve: true });
        response.status(200).json(LoanList);
    } catch {
        response.status(405).json({ message: error.message })
    }
}

export const pendingLoan = async (request, response) => {
    try {
        const LoanList = await Loan.find({ approve: false });
        response.status(200).json(LoanList);
    } catch {
        response.status(405).json({ message: error.message })
    }
}
export const allReceipt = async (request, response) => {
    try {
        const ReceiptList = await Receipt.find({ approve: true });
        response.status(200).json(ReceiptList);
    } catch {
        response.status(405).json({ message: error.message })
    }
}

export const pendingReceipt = async (request, response) => {
    try {
        const ReceiptList = await Receipt.find({ approve: false });
        response.status(200).json(ReceiptList);
    } catch {
        response.status(405).json({ message: error.message })
    }
}


export const assignedUsers = async (request, response) => {
    try {
        console.log(request.body)
        console.log("assignedUsers")

        const users = await User.findOne({ username: request.body.user.id })
            .populate('assignedUser');
        response.status(200).json(users);
    } catch {
        response.status(404).json({ message: error.message })
    }
}

// to get all users of a specific category (ex agent,customers etc) 
export const users = async (request, response) => {
    try {
        console.log(request.body)
        console.log("users0")

        const users = await User.find({ role: request.body.user.id })
            .populate('assignedUser');
        console.log(users)
        response.status(200).json(users);
    } catch {
        response.status(404).json({ message: error.message })
    }
}

export const getUserList = async (request, response) => {
    try {
        const userList = await User.find({});
        response.status(200).json(userList);
    } catch {
        response.status(405).json({ message: error.message })
    }
}

export const assigning = async (request, response) => {
    // const role = request.body;
    // const newRole = new User(role);
    try {
        // await newRole.save()
        console.log("assigning")
        const spUser = await User.find({ username: request.body.superUser.assigning_to });
        console.log("spUser0" + spUser.username)
        const user = await User.find({ username: request.body.user.mainUser_username });
        console.log("user0" + user.username)

        spUser.assignedUser.push(user._id.valueOf())


        // await User.updateOne({ username: spUser.username }, spUser);
        response.status(200).json(spUser);
    } catch {
        response.status(400).json({ message: error.message })
    }
}


//CRUD OPERATIONs

export const getUser = async (request, response) => {
    console.log(request.params);
    try {
        const user = await User.find({ username: request.params.id });
        console.log("getUser")
        response.status(200).json(user);
    } catch {
        response.status(405).json({ message: error.message })
    }
}

export const editUser = async (request, response) => {
    let user = request.body;
    const editUser = new User(user);

    try {
        await User.updateOne({ username: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        response.status(409).json({ message: "errorderabc" });
    }
}

export const getRole = async (request, response) => {
    console.log(request.params);
    try {
        const user = await Role.find({ role: request.params.id });
        response.status(200).json(user);
    } catch {
        response.status(405).json({ message: error.message })
    }
}


export const editRole = async (request, response) => {
    let user = request.body;
    const editRole = new Role(user);

    try {
        await Role.updateOne({ role: request.params.id }, editRole);
        response.status(201).json(editRole);
    } catch (error) {
        response.status(409).json({ message: "errorderabc" });
    }
}


export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id })
        response.status(200).json(deleteUser);
    } catch (error) {
        response.status(408).json({ message: error.message })
    }
}


export const deleteLoan = async (request, response) => {
    try {
        console.log(request.body.id)
        await Loan.deleteOne({ toCustomer: request.params.id })
        response.status(200).json(deleteLoan);
    } catch (error) {
        response.status(408).json({ message: error.message })
    }
}

export const approveLoan = async (request, response) => {
    try {
        console.log(request.params)
        const username = { toCustomer: request.params.id }
        console.log(username)
        const updateApproval = { approve: true }
        console.log(updateApproval)
        await Loan.findOneAndUpdate(username, updateApproval)
        response.status(200).json(approveLoan);
    } catch (error) {
        response.status(408).json({ message: error.message })
    }
}

export const approveReceipt = async (request, response) => {
    try {
        console.log(request.body)
        const rNo = request.body.receiptNumber.id
        console.log(rNo)
        // const updateApproval = { approve: true }
        // console.log(updateApproval)
        const rInfo = await Receipt.findOne({ receiptNumber: rNo })
        const rAmt = rInfo.amt
        const lNo = rInfo.loneNumber
        const lInfo = await Loan.findOne({ loanNumber: lNo })
        const lAmt = lInfo.amt - rAmt
        await Loan.findOneAndUpdate({ loanNumber: lNo }, { amt: lAmt })
        await Receipt.findOneAndUpdate({ receiptNumber: rNo }, { approve: true })

        response.status(200).json(approveReceipt);
    } catch (error) {
        response.status(408).json({ message: error.message })
    }
}




export const loginUser = async (req, res) => {
    //res.send({ msg: "Ok" })
    //console.log(req.body.username)

    const user = await User.findOne({ username: req.body.username });
    //console.log(user)
    if (!user) {
        return res.status(400).json("username incorrect")
    }
    try {
        let match = await bcrypt.compare(req.body.password, user.password);
        //console.log('Match', match)
        if (match) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            user.accessToken = accessToken
            user.refreshToken = refreshToken
            user.save()

            res.status(200).json(user)
        } else {

            res.status(400).json("username or password incorrect!");
        }
    } catch (err) {
        console.log(err)
        res.status(404).json("some error occured dunno what tho")
    }

}

/*
export const refreshToken = async (req, res) => {

    const refreshToken = req.body.token;
    const user = await User.findOne({ refreshToken: refreshToken })

    if (!refreshToken) return res.status(401).json("you are not authenticated!")

    if (!user) {
        return res.status(403).json("refresh token is not valid")
    }

    jwt.verify(refreshToken, "myrefreshcode", async (err, user) => {
        err && console.log(err);
        // token = token.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        // refreshTokens.push(newRefreshToken);

        user.accessToken = newAccessToken
        user.refreshToken = newRefreshToken
        user.save()

        // const newToken = new token({ token: refreshToken })
        // await newToken.save()

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    })

}


export const logoutSession = async (request, response) => {
    const refreshToken = request.body.token;
    const user = await User.findOne({ refreshToken: refreshToken })

    try {
        user.accessToken = ''
        user.refreshToken = ''
        user.save()
        response.status(200).json("You logged out successfully.");
    } catch {
        response.status(400).json({ message: error.message })
    }
}

// app.post("/api/logout", verify, (req, res) => {
//     const refreshToken = req.body.token;
//     refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    
// });

*/