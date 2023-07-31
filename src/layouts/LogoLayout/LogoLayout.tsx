
import { Link } from 'react-router-dom';

import Logo from '../../../public/media/images/logos/logo.png'

import './LogoLayout.css';

export const LogoLayout = ( ) => {
    return (
        <div className='LogoLayout'>
            <Link to="/">
                <img src={ Logo } id='logo'/>
            </Link>
        </div>
    )
};
