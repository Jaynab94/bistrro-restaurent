import axios from "axios";

const axiosSecure = axios.create({

    baseURL: 'http://localhost:5000',
})


const UseAxiosSecure = () => {

    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {


        const token = localStorage.getItem('access-token');
        console.log('user stop here', token)
        config.headers.authorization = `Bearer ${token}`

        return config;
    }, function (error) {

        return Promise.reject(error);
    });




    return axiosSecure;
};

export default UseAxiosSecure;