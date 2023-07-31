
import { isLogged } from '../../assistant/authHandler';

import { Link } from 'react-router-dom';

import './AuthLayout.css';

export const AuthLayout = ( ) => {
    let logged = isLogged();

    return (
        <div className='AuthLayout'>
            { !logged &&
                <div className='signin-button--container'>
                    <Link to="/Signin" className='signin-link header-link link'>
                        Signin
                    </Link>
                </div>
            }
            <div className='detach-button--container'>
                <Link to={`${!logged ? "/Signin" : "/Detach"}`} className='detach-link header-link link'>
                    Detach
                </Link>
            </div>
        </div>
    )
};
