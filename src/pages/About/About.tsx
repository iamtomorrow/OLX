
import { Link } from 'react-router-dom';
import AboutImage from '../../../public/media/images/backgrounds/about-image.png';

import './About.css';

export const About = ( ) => {
    return (
        <div className='About page'>
            <div className='about--container'>
                <div className='about-header--container'>
                    <img src={AboutImage} />
                    <p>About us</p>
                </div>
                <div className='about-body--container'>
                    <div className='about-text'>
                    We are Tomorrow, and you are seeing our latest project called OLX clone based on OLX website. This project was designed by Under Sorrow design system. Be aware if you want to learn more about the structure behind this project and even be part of our developer team, we will make available very soon the API and source code of it. So if you want to support us, please share this content and follow us on {<a href={"https://github.com/iamtomorrow"} target='_blank' className='link'>Github</a>} for future updates.
                    <br/>White love, Tomorrow team!
                    </div>
                </div>
            </div>
        </div>
    )
};
