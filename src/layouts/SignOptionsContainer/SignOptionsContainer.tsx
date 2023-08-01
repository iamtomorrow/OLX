
/* icon imports */
import GoogleIcon from 'remixicon-react/GoogleFillIcon';
import FacebookIcon from 'remixicon-react/FacebookFillIcon';
import TwitterIcon from 'remixicon-react/TwitterFillIcon';

/* style imports */
import './SignoptionsContainer.css';

interface Props {
    name: string;
}

export const SignOptionsContainer = ( { name }: Props ) => {
    return (
        <div className='signin-layout-options--container'>
            <p>{ name } with:</p>
                <div className='signin-icons'>
                    <GoogleIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            <p>or:</p>
        </div>
    )
}