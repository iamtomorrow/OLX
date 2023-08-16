
/* icon imports */
import NotIcon from 'remixicon-react/Notification2LineIcon';
// import ChatIcon from 'remixicon-react/Chat1LineIcon';
import HeartLineIcon from 'remixicon-react/HeartLineIcon';
import AdsIcon from 'remixicon-react/Apps2LineIcon';

import { Link } from 'react-router-dom';

import './NavbarLayout.css';

export const NavbarLayout = ( ) => {
    return (
        <nav className='NavbarLayout'>
            <ul className='navbar-layout-links'>
                <Link to="/MyAds" className='link'>
                    <li className='navbar-link'>
                        <AdsIcon className='navbar-icon' />
                        <p className='navbar-p'>My Ads</p>
                    </li>
                </Link>
                <Link to="/Notifications" className='link'>
                    <li className='navbar-link'>
                        <NotIcon className='navbar-icon' />
                        <p className='navbar-p'>Notifications</p>
                    </li>
                </Link>
                {/* <Link to="/Chat" className='link'>
                    <li className='navbar-link'>
                        <ChatIcon className='navbar-icon' />
                        <p className='navbar-p'>Chat</p>
                    </li>
                </Link> */}
                <Link to="/About" className='link'>
                    <li className='navbar-link'>
                        <HeartLineIcon  className='navbar-icon'/>
                        <p className='navbar-p'>About us</p>
                    </li>
                </Link>
            </ul>
        </nav>
    )
};
