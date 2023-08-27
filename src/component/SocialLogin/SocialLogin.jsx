import { FaFacebookF } from "react-icons/fa"
import { BsGithub, BsGoogle } from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    const { googleLogin } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            {/* -----------Social medea sign in-------------*/}
            <div className="flex gap-5 justify-center text-center w-full mx-auto">
                <div className="text-2xl border border-gray-800 p-2 rounded-full cursor-pointer active:scale-105 duration-300 transition-all ">
                    <FaFacebookF />
                </div>
                <div onClick={handleGoogleLogin} className="text-2xl border border-gray-800 p-2 rounded-full cursor-pointer active:scale-105 duration-300 transition-all hover:bg-gray-300">
                    <BsGoogle />
                </div>
                <div className="text-2xl border border-gray-800 p-2 rounded-full cursor-pointer active:scale-105 duration-300 transition-all ">
                    <BsGithub />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;