import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'
import qz1 from '../../../assets/qZone1.png'
import qz2 from '../../../assets/qZone2.png'
import qz3 from '../../../assets/qZone3.png'
import SocialLogin from "../../../components/SocialLogin";



const RightSideNav = () => {
    return (
        <div className="">
            <div className="p-0 lg:p-4 mb-6">
                <h2 className="text-2xl text-center md:text-left font-bold mb-6">Login With</h2>
                <div className="">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <div className="lg:p-4 p-0 mb-6">
                <h2 className="text-2xl text-center md:text-left font-bold mb-6">Find Us on</h2>
                <a className="font-medium flex p-4 border rounded-t-md items-center gap-3 border-b-0" target="blank" href="https://www.facebook.com/"><img src={facebook} alt="" />Facebook</a>
                <a className="font-medium flex p-4 border items-center gap-3 border-b-0" target="blank" href="https://twitter.com/"><img src={twitter} alt="" />Twitter</a>
                <a className="font-medium flex p-4 border rounded-b-md items-center gap-3" target="blank" href="https://www.instagram.com/"><img src={instagram} alt="" />Instagram</a>
            </div>
            <div className="lg:p-4 p-0 mb-6 ">
                <div className="bg-gray-100 p-2">
                    <h2 className="text-2xl text-center md:text-left font-bold mt-2 mb-6">Q Zone</h2>
                    <div className='flex flex-col  justify-center'>
                        <img src={qz1} alt="" />
                        <img src={qz2} alt="" />
                        <img src={qz3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;