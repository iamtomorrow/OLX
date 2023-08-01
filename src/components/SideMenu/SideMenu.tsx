
/* auth handlers imports */
import { logout } from '../../assistant/authHandler';

/* icon imports */
import UserIcon from 'remixicon-react/UserLineIcon';
import NotsIcon from 'remixicon-react/NotificationLineIcon';
import ChatIcon from 'remixicon-react/Chat1LineIcon';
import AdsIcon from 'remixicon-react/AppsLineIcon';
import LogOutIcon from 'remixicon-react/LogoutCircleLineIcon';

/* routes imports */
import { Link } from 'react-router-dom';

/* images imports */
// import HeaderLogo from '../../../public/media/images/logos/logo-2.png';
import PoweredByTomorrow from '../../../public/media/images/logos/powered-by-tomorrow-white.png';

/* reducer imports */
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import './SideMenu.css';

export const SideMenu = ( ) => {
    const menu = useSelector((state: RootState) => state.menu);

    const handleLogout = (  ) => {
        logout();
        window.location.href = "/";
    }

    return (
        <div className={`SideMenu SideMenu-${ menu.toggled ? "active" : ""}`}>
            <div className='side-menu-header--container'>
                <div className='side-menu-header'>
                    <div className='user-menu-bar'>

                    </div>
                </div>
            </div>
            <div className='side-menu-body--container'>
                <div className='side-menu-body'>
                    <Link to="/Account" id='my-account-link'>
                        <div id='user-icon--container'>
                        <UserIcon className='menu-link-icon' id='my-account-icon' />
                        </div>
                        <p className='menu-link-p'>My Account</p>
                    </Link>
                    <Link to="/Nots" className='menu-link link'>
                        <NotsIcon className='menu-link-icon' />
                        <p className='menu-link-p'>Notifications</p>
                    </Link>
                    <Link to="/Chat" className='menu-link link'>
                        <ChatIcon className='menu-link-icon' />
                        <p className='menu-link-p'>Chat</p>
                    </Link>
                    <Link to="/Ads" className='menu-link link'>
                        <AdsIcon className='menu-link-icon' />
                        <p className='menu-link-p'>My Ads</p>
                    </Link>
                    <button className='menu-link link' onClick={ handleLogout }> 
                        <LogOutIcon className='menu-link-icon' />
                        <p className='menu-link-p'>Logout</p>
                    </button>
                </div>
            </div>
            <div className='side-menu-footer--container'>
                <div className='side-menu-footer'>
                    <img src={ PoweredByTomorrow } id='powered-by-tomorrow' className='powered-by-tomorrow' />
                </div>
            </div>
        </div>
    )
}
