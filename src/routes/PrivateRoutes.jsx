import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CircularProgress } from '@material-tailwind/react';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <CircularProgress />
    }

    if(user){
        return children
    }

    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;