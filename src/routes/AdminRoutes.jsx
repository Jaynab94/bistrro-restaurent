import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../src/hooks/useAdmin"
import UseAuth from "../hooks/UseAuth";


const AdminRoutes = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = UseAuth();
    const location = useLocation();
    if (loading || isAdminLoading) return <span className="loading loading-bars loading-md"></span>

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;