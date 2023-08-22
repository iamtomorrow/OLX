/* 
##
## Copyright (c) Tomorrow Group.
## Licensed under the MIT License.
##
*/

/* image imports */
import logo from '../../../public/media/images/logos/footer-logo.png';

/* icon imports */
import InstagramIcon from 'remixicon-react/InstagramLineIcon';
import LinkedinIcon from 'remixicon-react/LinkedinFillIcon';
import FacebookIcon from 'remixicon-react/FacebookFillIcon';
import YouTubeIcon from 'remixicon-react/YoutubeFillIcon';
import TwitterIcon from 'remixicon-react/TwitterFillIcon';

/* react imports */
import { Link } from "react-router-dom";

/* style imports */
import "./Footer.css";

export const Footer = ( ) => {
    return (
        <footer className="Footer">
            <div className="footer-content--container">
                <div className='footer-left--container'>
                    <div className="footer-links--container">
                        <ul>
                            <Link to={"/HelpAndContact"} className='footer-link link'  >
                                Help and contact
                            </Link>
                            <Link to={"/HelpAndContact"} className='footer-link link'  >
                                Security tips
                            </Link>
                            <Link to={"/Detach"} className='footer-link link'  >
                                Sell on OLX
                            </Link>
                            <Link to={"/About"} className='footer-link link' >
                                About us
                            </Link>
                            <Link to={"/HelpAndContact"} className='footer-link link' >
                                Site map
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='footer-right--container'>
                    <div className='footer-logo--container'>
                        <img src={ logo } className='footer-logo' />
                    </div>
                    <div className="footer-social-links--container">
                        <InstagramIcon className='social-link' />
                        <FacebookIcon className='social-link' />
                        <LinkedinIcon className='social-link' />
                        <YouTubeIcon className='social-link' />
                        <TwitterIcon className='social-link' />
                    </div>
                </div>
            </div>
            <div className="footer-credits--container">
                <p className='powered-by-tomorrow-p'>2023 powered by tomorrow</p>
                {/* <img src={ PoweredByTomorrow } className='powered-by-tomorrow' /> */}
            </div>
        </footer>
    )
}
