import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import useAdmin from "../hooks/useAdmin";
import PropTypes from 'prop-types';


const AdminRoutes = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <span className="loading loading-bars loading-md"></span>
    }

    if (user && isAdmin) {
        return children;

    }

    return <Navigate to={'/login'}  replace></Navigate>

};

AdminRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoutes;