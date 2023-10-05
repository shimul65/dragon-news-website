import { Link, NavLink, useNavigate } from "react-router-dom";
import userPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import auth from "../../../firebase/firebase.config";
import toast from "react-hot-toast";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut(auth)
            .then(() => {
                navigate('/login');
                toast.success('User Log Out Successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }
    const links = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/about'>About</NavLink> </li>
        <li> <NavLink to='/career'>Career</NavLink> </li>

    </>
    return (
        <div className="navbar bg-base-100 mt-6 mb-6 md:mb-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user ? user?.photoURL : userPic} title={user?.displayName} />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-neutral">Logout</button>
                        :
                        <Link to='/login'><button className="btn btn-neutral">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;