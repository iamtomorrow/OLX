
/* components imports */
import { AdsContainer } from '../../components/AdsContainer/AdsContainer';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import './Home.css';

export const Home = ( ) => {
    return (
        <div className='Home page'>
            <Header />
            <AdsContainer id={8} label='Recent ads' />
            <AdsContainer id={8} label='Recent ads' />
            <Footer />
        </div>
    )
};
