export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
        // return { Authorization: 'Bearer ' + user.accessToken };
        return true;
    } else {
        return false;
    }
}

// export const logout = () => {
//     localStorage.removeItem("user");
// };