
/* components imports */
import { AdsContainer } from '../../components/AdsContainer/AdsContainer';
import { Header } from '../../components/Header/Header';
import { SideMenu } from '../../components/SideMenu/SideMenu';

import './Home.css';

export const Home = ( ) => {
    return (
        <div className='Home page'>
            <SideMenu />
            <Header />
            <AdsContainer id={8} label='Recent ads' />
        </div>
    )
};
