import { Navigate } from "react-router-dom";
import { AuthContext } from "../Layout/AuthProvider/AuthProvider";
import { useContext } from "react";
import PropTypes from 'prop-types'

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <h2>Loading...</h2>
    }

    if (user?.email){
    return children
    }
    return  <Navigate to='/login' replace></Navigate>
};
PrivateRoutes.propTypes ={
    children: PropTypes.node
}
export default PrivateRoutes;