import classes from './../../styles/UsernameLogin.module.css';
import image2 from "../../assets/images/login.jpeg";
import { useState } from 'react';


const UsernameLogin = ({ handleNext }) => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState();
    const handleChangeMail = (e)=>{
       setUserName(e.target.value)
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if((userName==='admin@gmail.com' || userName==='faculty@gmail.com' || userName==='student@gmail.com')&&(Number(password)===Number(123456))){
          handleNext(e);
        }
    }
    return (
        <div className={`${classes.slideitem} w-full mt-14 p-10 md:py-0 md:mt-0 h-[90vh] flex items-center mx-4 px-4 justify-center`}>
            <div className="flex flex-col md:flex-row w-[844px] h-10 md:h-[344px] items-center justify-center gap-[24px]">
                <div className='w-[430px] h-[290px]'>
                    <img className='w-full object-fill'
                        src={image2}
                        alt=""
                    />
                </div>
                {/* src\assets\images\side-image.jpeg */}
                <div className='w-[390px] h-[291px] p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="grid">
                            <div className="w-full mb-2">
                                <label htmlFor="username" className="block text-base font-medium leading-6 text-gray-900">
                                    User Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        placeholder='jooyun@whoflex.com'
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="given-name"
                                        onChange={handleChangeMail}
                                        className="block w-full rounded-[8px] py-2 px-2 h-[45px]  text-gray-900 shadow-sm ring-1 ring-[#009DFF] focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-full mb-2">
                                <label htmlFor="password" className="block text-base  font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="family-name"
                                        onChange={handleChangePassword}
                                        className="block w-full rounded-[8px] py-2 px-2 h-[45px] text-gray-900 shadow-sm ring-1 ring-[#009DFF] focus:outline-none placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>

                                <p className='my-2 text-[#4D4D4D] text-sm hover:cursor-pointer'>Forgot password?</p>
                            </div>
                            <button  className='bg-[#009DFF] w-[390px] h-[45px] text-white font-bold text-base px-2 py-1.5 rounded-[14px]'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default UsernameLogin;
