
import { Link } from 'react-router-dom';
import './PromoBanner.css';

export const PromoBanner = ( ) => {
    return (
        <div className="PromoBanner">
            <div className='promo-banner-inner--container'>
                <Link to={"https://wearetomorrow.com"} className='promo-banner-link link'>
                    Learn more
                </Link>
            </div>
        </div>  
    )
}
