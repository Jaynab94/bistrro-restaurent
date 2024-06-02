import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useMenu = () => {

    const axiosCommon = useAxiosCommon();



    // useEffect(() => {
    //     fetch('https://bistro-server-kohl.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {

    //             setMenus(data);
    //             setLoading(false)

    //         })


    // }, [])
    const { data: menu = [], isPending: loading,refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosCommon.get('/menu');
            return res.data;


        }

    })


    return [menu,loading,refetch];



}

export default useMenu;