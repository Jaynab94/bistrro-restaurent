import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LogIn = () => {

    const refCaptcha = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const { loginUser } = useContext(AuthContext);



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = { email, password }
        console.log(loginUser)

        //log in user with Firebase
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                toast.success('Logged in successfully')
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })

    }

    const handleValidate = () => {
        const value = refCaptcha.current.value;
        console.log(value)
        if (validateCaptcha(value) == true) {
            setDisabled(false)
        }
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

                                <input type="text" ref={refCaptcha} name="captcha" placeholder="type captcha here" className="input input-bordered" />

                                <button onClick={handleValidate} className='btn btn-xs mt-2'>validate</button>
                            </div>


                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='text-orange-400 font-semibold'>New here? <Link className='text-orange-400 font-semibold' to={'/register'}>Create a New Account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;