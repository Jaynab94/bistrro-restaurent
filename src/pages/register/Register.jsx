import { Link, useNavigate } from "react-router-dom";


import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";

import SocialLogin from "../../components/socialLogin/SocialLogin";




const Register = () => {
    const axiosCommon = useAxiosCommon();
    const { createUser, updateUserProfile } = UseAuth();
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
      

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                updateUserProfile(data.name, data.photo)
                    .then(res => {
                        console.log(res)
                        //add user info to database
                        const userInfo = {
                            name: data.name,
                            email: data.email

                        }

                        axiosCommon.post('/users', userInfo)

                            .then(res => {

                                if (res.data.insertedId) {

                                    toast.success("User Created Successfully")

                                    navigate('/')
                                }
                            })

                    })
                    .catch(err => {
                        console.log(err.message)
                    })




            })
            .catch(err => {

                toast.error(err.message)
            })
    }


    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const newUser = { name, email, password }
    //     console.log(newUser)
    // }



    return (
        <>
            <Helmet>
                <title>
                    Bistro | Register
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content flex-col md:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="your name" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">photo is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>




                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,

                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">password maxLength shold  be 20 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">password maxLength less than  be 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">password uppercase lowercase characters</p>
                                )}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>




                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="REGISTER" />
                            </div>
                            <p className='text-orange-400 text-center mt-2 font-semibold'>Already registered? <Link to={'/login'}>Go to log in</Link></p>

                            <p className="mt-2 font-semibold text-center">Or sign up with</p>


                        </form>
                     <div className="p-4">   <SocialLogin></SocialLogin></div>
                     
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;