
/* react imports */
import { useEffect, useState } from 'react';

/* layout imports */
import { AuthLayout } from '../../layouts/AuthLayout/AuthLayout';
import { LogoLayout } from '../../layouts/LogoLayout/LogoLayout';
import { NavbarLayout } from '../../layouts/NavbarLayout/NavbarLayout';
import './Header.css';
import { BurgerLayout } from '../../layouts/BurgerLayout/BurgerLayout';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = ( ) => {
    const [ winWidth, setWinWidth ] = useState<number>( window.innerWidth );

    useEffect( () => {
        window.addEventListener("resize", ( ) => {
            setWinWidth( window.innerWidth );
        })

        return () => {
            window.removeEventListener("resize", () => { });
        }
    }, []);

    return (
        <div className='Header'>
            <div className='top-header--container'>
                <div className='header-left--container'>
                    { winWidth < 630 &&
                        <> 
                            <BurgerLayout />
                        </>
                    }
                    { winWidth >= 630 &&
                        <>
                            <LogoLayout /> 
                        </>
                    }
                </div>
                <div className='header-central--container'>
                    { winWidth < 630 &&
                        <>
                            <LogoLayout /> 
                        </>
                    }
                    { winWidth >= 630 &&
                        <>
                            <NavbarLayout />
                        </>
                    }
                </div>
                <div className='header-right--container'>
                    <AuthLayout />
                </div>
            </div>
            <div className='bottom-header--container'>
                <SearchBar />
            </div>  
        </div>
    )
};
