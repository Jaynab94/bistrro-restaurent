import axios from "axios";

const axiosCommon = axios.create({

    baseURL: 'j',
})


const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;