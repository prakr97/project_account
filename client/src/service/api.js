import axios from 'axios';
// import jwt_decode from "jwt-decode";

const URL = 'http://localhost:8000';

// const axiosJWT = axios.create()

// axiosJWT.interceptors.request.use(
//     async (config) => {
//         let currentDate = new Date();
//         const decodedToken = jwt_decode(user.accessToken);
//         if (decodedToken.exp * 1000 < currentDate.getTime()) {
//             const data = await refreshToken();
//             config.headers["authorization"] = "Bearer " + data.accessToken;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export const addUserInfo = async (data) => {
    try {
        console.log(data)
        return await axios.post(`${URL}/addUser`, data)
    } catch (error) {
        console.log('Error while calling add User info Api', error);
    }

}

export const addRole = async (data) => {
    try {
        return await axios.post(`${URL}/addRole`, data)
    } catch (error) {
        console.log('Error while calling add role Api', error);
    }

}








export const addLoan = async (data) => {
    try {

        return await axios.post(`${URL}/addLoan`, data)
    } catch (error) {
        console.log('Error while calling add Loan Api', error);
    }

}


export const addReceipt = async (data) => {
    try {

        return await axios.post(`${URL}/addReceipt`, data)
    } catch (error) {
        console.log('Error while calling add Receipt Api', error);
    }

}

export const loginUser = async (data) => {
    try {
        console.log('##hii')
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login user Api', error);
    }

}


export const getAllRoles = async () => {
    try {
        return await axios.get(`${URL}/roles`)
    } catch (error) {
        console.log('error while calling getAllRoles api', error)
    }
}

export const getAssignedUsers = async (user) => {
    try {
        console.log(user)
        return await axios.post(`${URL}/assignedUsers`, { user })
    } catch (error) {
        console.log('error while calling getUsers api', error)
    }
}

// to get all users of specific category
export const getUsers = async (user) => {
    try {
        console.log(user)
        return await axios.post(`${URL}/${user}`, { user })
    } catch (error) {
        console.log('error while calling getUsers api', error)
    }
}

// for 'addUserInfo' form to get all users list
export const getUserList = async () => {
    try {

        return await axios.get(`${URL}/userList`)
    } catch (error) {
        console.log('error while calling getUserList api', error)
    }
}

// to push in assignedUsers array for populate
export const assigning = async (user, superUser) => {
    try {
        console.log(user, superUser)
        return await axios.post(`${URL}/assigning`, { user, superUser })
    } catch (error) {
        console.log('error while calling assigning api', error)
    }
}

export const getRole = async (role) => {
    try {
        return await axios.get(`${URL}/role/${role}`)
    } catch (error) {
        console.log('error while calling getRole api', error)
    }
}


export const editRole = async (roleInfo, role) => {
    try {
        return await axios.post(`${URL}/role/${role}`, roleInfo)
    } catch (error) {
        console.log('error while calling editRole api', error)
    }

}

export const getUser = async (user) => {
    try {
        return await axios.get(`${URL}/editUser/${user}`)
    } catch (error) {
        console.log('error while calling getUser api', error)
    }
}


export const editUser = async (userInfo, user) => {
    try {
        return await axios.post(`${URL}/editUser/${user}`, userInfo)
    } catch (error) {
        console.log('error while calling editUser api', error)
    }

}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('error while calling deleteUser api', error)
    }
}
// export const getAgents = async () => {
//     try {
//         return await axios.get(`${URL}/agents`)
//     } catch (error) {
//         console.log('error while calling getAgents api', error)
//     }
// }


/*
const refreshToken = async () => {
    try {
        const res = await axios.post("/refresh", { token: user.refreshToken });
        return res.data;
    } catch (err) {
        console.log('Error while refreshing token', err);
    }
    // setUser({
    //     ...user,
    //     accessToken: res.data.accessToken,
    //     refreshToken: res.data.refreshToken,
    // });
};


// app.post("/api/logout", verify, (req, res) => {
//     const refreshToken = req.body.token;
//     refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
//     res.status(200).json("You logged out successfully.");
// });

*/


