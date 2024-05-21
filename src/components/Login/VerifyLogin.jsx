import classes from "./../../styles/UsernameLogin.module.css";
import image2 from "../../assets/images/login.jpeg";

//import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from "../../contextApi/auth-context";

const VerifyLogin = () => {
    const authCntxt = useContext(AuthContext)
    //const navigate = useNavigate();
    const [code,setCode] = useState();
    function handleVerify(e){
        setCode(e.target.value)
    }
    function handleSubmit(e){
       e.preventDefault();
       if(Number(code)===Number(123456)){
        authCntxt.login();
        //navigate('/dashboard')
       }
    }
    return (
        <div className={`w-full mt-10 md:mt-0 h-[90vh] flex items-center mx-4 px-4 justify-center  ml-[-10px] ${classes.slideitem}`}>


            <div className="flex flex-col md:flex-row w-[844px] h-[344px] items-center justify-center gap-6">
                <div className='w-[430px] h-[290px]'>
                    <img className='w-full object-fill'
                        src={image2}
                        alt=""
                    />
                </div>

                <div className='flex-col w-[390px] h-[206px] gap-4 items-center'>

                    <div className="w-full mb-2">
                        <h1 className='font-bold text-sm'>Open on Mobile</h1>
                        <p className='text-xs text-gray-400'>Please verify the authentication code sent on your phone or email</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full">
                            <div className="w-full mb-2">
                                <label htmlFor="password" className="block text-base font-normal leading-6 text-gray-900">
                                    Verify Code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={handleVerify}
                                        autoComplete="family-name"
                                        className="block w-full rounded-xl border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-[#009DFF] focus:outline-none placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                                <p className='my-2 text-[#4D4D4D] text-xs hover:cursor-pointer'>Resend Code?</p>
                            </div>
                            <button className='bg-[#009DFF] h-[45px] w-full font-bold text-white my-2 px-2 py-1.5 rounded-xl'>Verify & Login</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default VerifyLogin;
