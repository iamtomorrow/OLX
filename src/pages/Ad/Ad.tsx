
/* component imports */
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

/* layout imports */
import { AdLayout } from '../../layouts/AdLayout/AdLayout';

/* style imports */
import './Ad.css';

export const Ad = ( ) => {
    return (
        <div className="Ad page">
            <Header />
            <AdLayout />
            <Footer />
        </div>
    )
}
