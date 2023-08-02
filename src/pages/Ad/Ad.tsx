
/* component imports */
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { SideMenu } from '../../components/SideMenu/SideMenu';

/* layout imports */
import { AdLayout } from '../../layouts/AdLayout/AdLayout';

/* style imports */
import './Ad.css';

export const Ad = ( ) => {
    return (
        <div className="Ad page">
            <Header />
            <SideMenu />
            <AdLayout />
            <Footer />
        </div>
    )
}
