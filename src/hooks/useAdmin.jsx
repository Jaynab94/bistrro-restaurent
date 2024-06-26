import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
    const { user, loading } = UseAuth();
    console.log(user);
    const axiosSecure = UseAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data.admin);
            return res.data?.admin;

        }

    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;