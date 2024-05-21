import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const useCarts = () => {
    //use tanstack query to get carts
    const axiosSecure = UseAxiosSecure();
  
    const { user } = UseAuth();
 

    const { refetch, data: carts = [] } = useQuery({


        queryKey: ['carts', user?.email],


        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log(res.data)
            return res.data

        }


    })
    return [carts, refetch]
};

export default useCarts;