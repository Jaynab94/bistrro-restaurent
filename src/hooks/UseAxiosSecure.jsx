import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({

    // baseURL: 'http://localhost:5000',
    baseURL: 'http://localhost:5000',
})


const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = UseAuth()

    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {


        const token = localStorage.getItem('access-token');
        // console.log('user stop here', token)
        config.headers.authorization = `Bearer ${token}`

        return config;
    }, function (error) {

        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {

        return response;
        // Do something with response data
    }, async (error) => {

        console.log('errror by interceptor', error);

        const status = error.response.status;

        //for 401 and 404 user log out and redirect to login page
        if (status === 401 || status === 403) {
            await logoutUser();
            navigate('/login', { replace: true })
        }

        return Promise.reject(error);
    });




    return axiosSecure;
};

export default UseAxiosSecure;