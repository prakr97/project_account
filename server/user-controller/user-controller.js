// import { response } from 'express';
import {   Loan, Receipt, User, Role} from '../schema/schema.js'

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


export const addRole = async(request, response) => {
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


export const role = async (request, response) => {
    try {
        const roles = await Role.find({});
        response.status(200).json(roles);
    } catch {
        response.status(405).json({ message: error.message })
    }
}

export const assignedUsers = async (request, response) => {
    try {
        console.log(request.body)
        const users = await User.findOne( {username: request.body.user.id} )
        .populate('assignedUser');
        response.status(200).json(users);
    } catch {
        response.status(404).json({ message: error.message })
    }
}

export const customers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch {
        response.status(404).json({ message: error.message })
    }
}

export const agents = async (request, response) => {
    try {
        const users = await User.find({ role: "agent" }).populate('assignedUser');
        response.status(200).json(users);
    } catch {
        response.status(404).json({ message: error.message })
    }
}

export const accountants = async (request, response) => {
    try {
        const users = await User.find({ isAcc: true });
        response.status(200).json(users);
    } catch {
        response.status(404).json({ message: error.message })
    }
}



export const loginUser = async (req, res) => {
    // const { username, password } = req.body;
    // const user = await User.findOne({ username: req.body.username, password: req.body.password });
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).json("username incorrect")
    }
    try {
        let match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            user.accessToken = accessToken
            user.refreshToken = refreshToken
            user.save()

            // const newToken = new token({ token: refreshToken })
            // await newToken.save()

            return res.status(200).json({
                username: user.username,
                isAdmin: user.isAdmin,
                isAcc: user.isAcc,
                isAgent: user.isAgent,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken
            })
        } else {

            res.status(400).json("username or password incorrect!");
        }
    } catch {
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