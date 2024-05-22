import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import UseAuth from '../../hooks/UseAuth';
import SocialLogin from '../../components/socialLogin/SocialLogin';

const LogIn = () => {
    const [disabled, setDisabled] = useState(true);

    const { loginUser } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/';
    console.log('vai ekhne location dekh', location.state)



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    const handleValidate = (e) => {
        const value = e.target.value;
        console.log(value)
        if (validateCaptcha(value) == true) {
            toast.success('Captcha validated successfully')
            setDisabled(false)
        }
    }


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loggdinUser = { email, password }
        console.log(loggdinUser)


        //log in user with Firebase
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                toast.success('Logged in successfully')

                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })

    }
    



    return (
        <><Helmet>
            <title>
                Bistro| Login
            </title>
        </Helmet>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col md:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>




                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>

                                <input onBlur={handleValidate} type="text" name="captcha" placeholder="type captcha here" className="input input-bordered" />


                            </div>


                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </form>
                        
                        <SocialLogin></SocialLogin>
                        <p className='text-orange-400 mb-4 font-semibold text-center'>New here? <Link className='text-orange-400 font-semibold ' to={'/register'}>Create a New Account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;