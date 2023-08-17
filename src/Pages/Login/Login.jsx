import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png"
import { FaFacebookF } from "react-icons/fa"
import { BsGithub, BsGoogle } from "react-icons/bs"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
const Login = () => {
    const { reset, formState: { errors }, } = useForm();
    const [disabled, setDisabled] = useState(true);
    const [authError, setAuthError] = useState(null);
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    {/*----Chapcha number Length------*/ }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    {/*------------Handle Submit ---------------*/ }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password);

        {/* SignIn with email and password*/ }
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                // Failed login
                console.log(error);
                setAuthError("Password Not Match");
                setLoading(false); // Stop loading
            });
    }

    {/*------------Handle Chapcha--------------*/ }
    const handleValideteChapcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
            e.target.value = ""
        }
    }
    return (
        <div className="  bg-[#F1F2F4] ">
            <div className=" min-h-screen flex items-center  w-10/12 mx-auto  ">
                <div className="lg:flex items-center gap-16 border shadow-lg lg:px-32 px-4 py-10 w-full">
                    <div className="hidden lg:block lg:w-1/2 w-full">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 lg:w-1/2 w-full">
                        <h4 className="text-center text-2xl font-semibold">Login</h4>
                        <div>
                            <p className="mb-1">Email</p>
                            <input type="email" name="email" placeholder="Type email" className="p-2 outline-none w-full rounded-md" />
                        </div>
                        <div>
                            <p className="mb-1">Password</p>
                            <input type="password" name="password" placeholder="Type Password" className="p-2 outline-none w-full rounded-md" /> <br />
                            {authError && <span className="text-red-600 mt-1">Password not match</span>}
                        </div>

                        {/*------------Chapcha text------------- */}
                        <LoadCanvasTemplate />
                        <input type="text" onBlur={handleValideteChapcha} name="chapcha" placeholder="Type chapcha text" className="p-2 outline-none w-full rounded-md" />


                        {/*--------------Sign In button-------------- */}
                        {/*----------TODO: Button disabled to use chapcha-------*/}
                        <input disabled={false} type="submit" value="Sign In" className='btn btn-secondary bg-[#e2b56b] border-none hover:bg-[#e2b56b] text-white w-full' />

                        <p className="text-[#e2b56b] text-center">New here? <Link to="/signUp">Create a Account</Link> </p>
                        <p className="text-center font-semibold">Or Sign in with</p>

                        {/* -----------Social medea sign in-------------*/}
                        <div className="flex gap-5 justify-center text-center w-full mx-auto">
                            <div className="text-2xl border border-gray-800 p-2 rounded-full cursor-pointer active:scale-105 duration-300 transition-all ">
                                <FaFacebookF />
                            </div>
                            <div className="text-2xl border border-gray-800 p-2 rounded-full cursor-pointer active:scale-105 duration-300 transition-all ">
                                <BsGoogle />
                            </div>
                            <div className="text-2xl border border-gray-800 p-2 rounded-full cursor-pointer active:scale-105 duration-300 transition-all ">
                                <BsGithub />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;