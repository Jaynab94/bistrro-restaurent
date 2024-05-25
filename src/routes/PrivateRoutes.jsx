
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import UseAuth from "../hooks/UseAuth";


const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = UseAuth();
    if (loading) return <span className="loading loading-bars loading-md"></span>

    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoutes;