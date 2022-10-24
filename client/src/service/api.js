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

export const addAgent = async (data) => {
    try {
        return await axios.post(`${URL}/addAgent`, data)
    } catch (error) {
        console.log('Error while calling add Agent Api', error);
    }

}

export const addCustomer = async (data) => {
    try {
        return await axios.post(`${URL}/addCustomer`, data)
    } catch (error) {
        console.log('Error while calling add Customer Api', error);
    }

}

export const addAccountant = async (data) => {
    try {

        return await axios.post(`${URL}/addAccountant`, data)
    } catch (error) {
        console.log('Error while calling add accountant Api', error);
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
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login user Api', error);
    }

}

export const getCustomers = async () => {
    try {
        return await axios.get(`${URL}/customers`)
    } catch (error) {
        console.log('error while calling getUsers api', error)
    }
}

export const getAgents = async () => {
    try {
        return await axios.get(`${URL}/agents`)
    } catch (error) {
        console.log('error while calling getUsers api', error)
    }
}

export const getAccountants = async () => {
    try {
        return await axios.get(`${URL}/accountants`)
    } catch (error) {
        console.log('error while calling getUsers api', error)
    }
}

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


