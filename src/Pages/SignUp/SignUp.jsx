import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png"
import { FaFacebookF } from "react-icons/fa"
import { BsGithub, BsGoogle } from "react-icons/bs"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import SocialLogin from "../../component/SocialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUser, setLoading } = useContext(AuthContext);
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const logedUser = result.user;
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log("user profile updated");
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })
                        navigate('/');

                    }).catch(errors => {
                        console.log(errors)
                        // reset()
                    })
            })
    }


    return (
        <div className="  bg-[#F1F2F4] ">
            <div className=" min-h-screen flex  items-center  w-10/12 mx-auto  ">
                <div className="lg:flex flex-row-reverse items-center gap-16 border shadow-lg lg:px-32 px-4 py-10 w-full">
                    {/*------------Sign image Desktop virsion-------------*/}
                    <div className="hidden lg:block lg:w-1/2 w-full">
                        <img src={loginImg} alt="" />
                    </div>
                    {/*------------Sign in form-------------*/}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:w-1/2 w-full">
                        <h4 className="text-center text-2xl font-semibold">Sign Up</h4>

                        {/*------------Name Field-------------*/}
                        <div>
                            <p className="mb-1">Name</p>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Type email" className="p-2 outline-none w-full rounded-md" />
                            {errors.name && <span className="text-red-600 mt-1">Name is required</span>}
                        </div>
                        {/*------------Photo URL-------------*/}
                        <div>
                            <p className="mb-1">Uploade Photo</p>
                            <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="p-2 outline-none w-full rounded-md" />
                            {errors.photoURL && <span className="text-red-600 mt-1">Photo is requared</span>}
                        </div>

                        {/*------------Email Field-------------*/}
                        <div>
                            <p className="mb-1">Email</p>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Type Password" className="p-2 outline-none w-full rounded-md" />
                            {errors.email && <span className="text-red-600 mt-1">Email is required</span>}
                            {emailError && <span className="text-red-600 mt-1">{emailError}</span>}
                        </div>

                        {/*------------Password Field-------------*/}
                        <div>
                            <p className="mb-1">Password</p>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name="password" placeholder="Type Password" className="p-2 outline-none w-full rounded-md" />
                            {/*--------Password Validation field----------*/}
                            {errors.password?.type === "minLength" && <span className="text-red-600 mt-1">Password must be 6 charanter</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-600 mt-1">Password must be less then 20 charanter</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-600 mt-1">Password must have one uppercase one loyarcase one number and one special characters</span>}
                        </div>
                        {/*------------Sign In Button-------------*/}
                        <input type="submit" value="Sign Up" className='btn bg-[#e2b56b] border-none hover:bg-[#e2b56b] text-white w-full' />

                        <p className="text-[#e2b56b] text-center">Already Registered? <Link to="/login">Go to login</Link> </p>
                        <p className="text-center font-semibold">Or Sign in with</p>

                        {/* -----------Social medea sign in-------------*/}
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;