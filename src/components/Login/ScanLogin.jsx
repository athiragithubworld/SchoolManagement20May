import React from 'react'
import image2 from "../../assets/images/login.jpeg";
import barcode from "../../assets/images/qr-code.png";
import classes from "./../../styles/UsernameLogin.module.css";
const ScanLogin = ({ handleNext }) => {
    return (
        <div className={`w-full mt-14 p-10 md:mt-0 md:h-[90vh] flex items-center mx-4 px-4 justify-center overflow-auto ml-[-20px] ${classes.slideitem}`}>

            <div className="flex flex-col md:flex-row w-[844px] h-10 md:h-[344px] items-center justify-center gap-[24px]">
                <div className='w-[430px] h-[290px]'>
                    <img className='w-full object-fill'
                        src={image2}
                        alt=""
                    />
                </div>

                <div className='w-[390px] h-[336px] grid flex-col justify-center items-center py-4 gap-4 '>
                    <h1 className='font-bold text-sm'>Open on Mobile</h1>
                    <p className='text-xs text-gray-400 h-8'>Scan this QR code to securely log in. It'll prompt you to confirm your identity using your preferred method PIN. Enjoy quick,secure access without typing your credentials.</p>
                    <img className='object-contain justify-self-center w-[196px] h-[196px] bg-gray-300' src={barcode} alt="" />
                    <button onClick={handleNext} className='bg-[#009DFF] w-full text-white font-bold text-base px-2 py-1.5 rounded-[14px]'>Verify</button>
                </div>
            </div>


        </div>
    )
}

export default ScanLogin;
