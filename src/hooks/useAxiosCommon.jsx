import axios from "axios";

const axiosCommon = axios.create({

    baseURL: 'https://bistro-server-kohl.vercel.app',
})


const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;