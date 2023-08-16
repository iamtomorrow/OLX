
import { Link } from 'react-router-dom';

import Logo from '../../../public/media/images/logos/logo-white.png';

import './LogoLayout.css';

export const LogoLayout = ( ) => {
    return (
        <div className='LogoLayout'>
            <Link to="/" className='logo-link'>
                <img src={ Logo } id='logo'/>
            </Link>
        </div>
    )
};
