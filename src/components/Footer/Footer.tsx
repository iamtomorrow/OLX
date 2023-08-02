
import PoweredByTomorrow from '../../../public/media/images/logos/powered-by-tomorrow-white.png';

/* icon imports */
import InstagramIcon from 'remixicon-react/InstagramLineIcon';
import LinkedinIcon from 'remixicon-react/LinkedinFillIcon';
import FacebookIcon from 'remixicon-react/FacebookFillIcon';
import TwitterIcon from 'remixicon-react/TwitterFillIcon';

/* react imports */
import { Link } from "react-router-dom";

/* style imports */
import "./Footer.css";

export const Footer = ( ) => {
    return (
        <div className="Footer">
            <div className="footer-content--container">
                <div className="footer-links--container">
                    <ul>
                        <Link to={"/HelpAndContact"} >
                            Help and contact
                        </Link>
                        <Link to={"/HelpAndContact"} >
                            Security tips
                        </Link>
                        <Link to={"/HelpAndContact"} >
                            Sell on OLX
                        </Link>
                        <Link to={"/HelpAndContact"} >
                            About us
                        </Link>
                    </ul>
                </div>
                <div className="footer-social--container">
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedinIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className="footer-credits--container">
                <img src={ PoweredByTomorrow } className='powered-by-tomorrow' />
            </div>
        </div>
    )
}