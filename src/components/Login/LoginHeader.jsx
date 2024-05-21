import React from 'react'
import { IoHelpBuoyOutline } from "react-icons/io5";
import { PiChatCenteredTextFill } from "react-icons/pi";
import lunaraLogo from "../../assets/images/Lunara Academix1.png"
const LoginHeader = () => {
    return (
        <div className='fixed w-full h-10 z-[100] mt-3 px-2 bg-white text-black'>
        <div className='flex justify-between h-12 ml-[25px] mr-[25px]'>
            <img className=' w-50 h-14 py-2' src={lunaraLogo} alt="" />
            <div className='flex p-2 w-[154px] gap-6'>
                <div className='flex w-[72px] h-[27px] '>
                <IoHelpBuoyOutline size={25}/>
                <p className='px-2 w-[22px] h-[14px]'>Help</p>
                </div>
                <div className='flex w-[70px] h-[32px]'>
                <PiChatCenteredTextFill size={25}/>
                <p className='px-2 w-[20px] h-[14px]'>FAQ</p>
                </div>
            </div>
        </div>
        
        
      
    </div>
    )
}

export default LoginHeader;
