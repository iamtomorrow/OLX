
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
    const [ winWidth, setWinWidth ] = useState<number>(0);

    useEffect( () => {
        window.addEventListener("resize", ( ) => {
            setWinWidth( window.innerWidth );
        })
    }, []);

    return (
        <div className='Header'>
            <div className='top-header--container'>
                { winWidth < 630 &&
                    <> 
                        <BurgerLayout />
                        <LogoLayout /> 
                    </>
                }
                { winWidth >= 630 &&
                    <>
                        <LogoLayout />
                        <NavbarLayout />
                    </>
                }
                <AuthLayout />
            </div>
            <div className='bottom-header--container'>
                <SearchBar />
            </div>  
        </div>
    )
};
