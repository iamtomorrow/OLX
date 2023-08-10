
/* API imports */
import API from '../../assistant/api';

/* Auth imports */
import { isLogged } from '../../assistant/authHandler';

/* routes imports */
import { Link } from 'react-router-dom';

/* style imports */
import './AuthLayout.css';
import { useEffect, useState } from 'react';
import { UserProps } from '../../Types/UserTypes';
import { AdProps } from '../../Types/AdTypes';

/* icon imports */
import ArrowDownIcon from 'remixicon-react/ArrowDownSLineIcon';

export const AuthLayout = ( ) => {
    let logged = isLogged();

    const [ userInfo, setUserInfo ] = useState< UserProps | AdProps >();
    const [ toggled, setToggled ] = useState<boolean>(false);

    useEffect(() => {
        const getUser = async ( ) => {
            if (logged) {
                let data = await API.getMe();
                setUserInfo(data[0]);
            }
        }
        getUser();
    }, []);

    const toggleMenuBar = ( ) => {
        if ( !toggled ) {
            document.querySelector(".SideMenu")?.classList.add("SideMenu-mobile--active");
            setToggled(true);
        } else {   
            document.querySelector(".SideMenu")?.classList.remove("SideMenu-mobile--active");
            setToggled(false);
        }
    }

    return (
        <div className='AuthLayout'>
            { !logged &&
                <div className='signin-button--container'>
                    <Link to="/Signin" className='signin-link header-link link'>
                        Signin
                    </Link>
                </div>
            }
            { logged &&
                <div className='my-account-button--container' onClick={ toggleMenuBar}>
                    <button className='my-account-link link'>
                        <div className='my-account-avatar--container'>

                        </div>
                        <div className='my-account-link-info'>
                            { userInfo && 
                            <div className='my-account-link-info-inner'>
                                <p>{ userInfo?.name }</p>
                                <ArrowDownIcon id='arrow-down-icon' />
                            </div> }
                            { !userInfo && <p>MyAccount</p> }
                        </div>
                    </button>
                </div>
            }
            <div className='detach-button--container'>
                <Link to={"/Detach"} className='detach-link header-link link'>
                    Detach
                </Link>
            </div>
        </div>
    )
};
