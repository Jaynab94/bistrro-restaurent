import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const { logInWithGoogle } = UseAuth();
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        console.log('google login clicked')
        logInWithGoogle()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photo: res.user.photoURL
                }
                axiosCommon.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        toast.success("User Created Successfully")
                        navigate('/')
                    })

            })
            .catch(err => {
                console.log(err.message)
            })

    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn glass w-full">Login with<FaGoogle></FaGoogle></button>

        </div>
    );
};

export default SocialLogin;