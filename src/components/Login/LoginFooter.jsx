import facebookImg from './../../assets/images/facebook.png';
import linkedinImg from './../../assets/images/linkedin-icon.png';
import instagramImg from './../../assets/images/icons8-instagram.png';

const LoginFooter = () => {
    return (
        <footer className='absolute bottom-0 md:m-auto z-50 md:z-0 w-full flex justify-between md:grid md:grid-cols-3  mb-8 md:mb-8 my-2 px-2'>
            <div></div>
            <div className="text-lg xl:text-lg 2xl:text-sm  font-normal self-center">
                <ul className='flex list-disc justify-center gap-5'>
                    <li className='mx-8'>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className='flex items-center justify-end'>
                <div className="px-3 border-r"><img src={facebookImg} alt='facebook logo' className="min-w-8 min-h-8 "/></div>
                <div className="px-3 border-r"><img src={linkedinImg} alt='linkedin logo' className="min-w-8 min-h-8"/></div>
                <div className="px-3"><img src={instagramImg} alt='instagram logo' className="min-w-8 min-h-8"/></div>
            </div>
        </footer>
    )
}

export default LoginFooter


