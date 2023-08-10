
/* components imports */
import { AdsContainer } from '../../components/AdsContainer/AdsContainer';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { PromoBanner } from '../../layouts/PromoBanner/PromoBanner';
import { TopBannerLayout } from '../../layouts/TopBannerLayout/TopBannerLayout';

import './Home.css';

export const Home = ( ) => {
    return (
        <div className='Home page'>
            <Header />
            <PromoBanner />
            <AdsContainer id={1} label='Recent ads' category='' />
            <AdsContainer id={4} label='For musicians' category='music' />
            <AdsContainer id={2} label='Electronics' category='electronics' />
            <AdsContainer id={3} label='Appliances' category='appliances' />
            <PromoBanner />
            <Footer />
        </div>
    )
};
