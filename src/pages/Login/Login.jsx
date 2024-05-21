import { useState } from 'react';
import classes from "./../../styles/Login.module.css";
import { FaRegCircle } from "react-icons/fa6";
import UsernameLogin from "../../components/Login/UsernameLogin";
import ScanLogin from "../../components/Login/ScanLogin";
import VerifyLogin from "../../components/Login/VerifyLogin";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginFooter from "../../components/Login/LoginFooter";
function Login() {

    const [currSlide, setCurrSlide] = useState(1);
    const handleNext = (e) => {
        e.preventDefault();
        setCurrSlide(prev => prev + 1);
    }

    return (
        <>
            <LoginHeader />
            <div className={`${classes.horizontalslider} flex-col h-screen`} >
                <div className={classes.slidercontainer} style={{ transform: `translateX(-${(currSlide - 1) * 100}%)` }}>
                    <UsernameLogin handleNext={handleNext} />
                    <ScanLogin handleNext={handleNext} />
                    <VerifyLogin  />
                </div>
                <div className={'hidden md:flex md:items-center lg:mt-[-200px] md:justify-center md:gap-2'}>
                    <FaRegCircle className={currSlide === 1 ? 'bg-[#009DFF] rounded-xl text-white' : 'text-white bg-gray-300 rounded-xl'} />
                    <FaRegCircle className={currSlide === 2 ? 'bg-[#009DFF] rounded-xl text-white' : 'text-white  bg-gray-300 rounded-xl'} />
                    <FaRegCircle className={currSlide === 3 ? 'bg-[#009DFF] rounded-xl text-white' : 'text-white  bg-gray-300 rounded-xl'} />
                </div>
            </div>
            <LoginFooter />
        </>
    );
}

export default Login;