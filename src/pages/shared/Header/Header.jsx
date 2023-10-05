import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-12 mb-8 px-4 md:px-0'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p className='text-lg mt-5 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl'><span className='font-medium'>{moment().format('dddd')},</span> {moment().format('LL')}</p>
        </div>
    );
};

export default Header;