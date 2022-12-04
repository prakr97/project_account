import { Navigate, Outlet, useNavigate } from "react-router-dom";
import authHeader from "../service/api";
import AddLogin from "./Login";

const useAuth = () => {
    const user = { loggedIn: authHeader() }
    return user && user.loggedIn
}

// useEffect(() => {
//     authentication()
//   }, []);
//   const authentication = async () => {
//     const isAuth = await authHeader()
//     if (isAuth) {
//       console.log('welcome user')
//       navigate('/')
//     }
//     else navigate('/login')
//   }


const ProtectedRoutes = () => {
    // const navigate = useNavigate()
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <AddLogin />
}

export default ProtectedRoutes