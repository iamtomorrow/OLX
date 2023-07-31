
/* icon imports */
import GoogleIcon from 'remixicon-react/GoogleFillIcon';
import FacebookIcon from 'remixicon-react/FacebookFillIcon';
import TwitterIcon from 'remixicon-react/TwitterFillIcon';

/* react imports */
import { useState } from 'react';

import './SigninLayout.css';

export const SigninLayout = ( ) => {
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ disabled, setDisabled ] = useState<boolean>(false);

    return (
        <div className='SigninLayout'>
            <div className='signin-layout-header--container'>
                <h3 className='header-text'>Signin</h3>
            </div>
            <div className='signin-layout-options--container'>
                <p>Sign in with:</p>
                <div className='signin-icons'>
                    <GoogleIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
                <p>or:</p>
            </div>
            <div className='signin-layout-form--container'>
                <form className='signin-form'>
                    <label className='form-label'>
                        { /* <span className='form-span'>Email</span> */ }
                        <div className='form-input--container'>
                            <input className='form-input' 
                                type='text' 
                                name='email' 
                                required 
                                placeholder='Email'
                                disabled={ disabled } />
                            <div className='input-border-bottom'></div>
                        </div>
                    </label>
                    <label className='form-label'>
                        { /* <span className='form-span'>Password</span> */ }
                        <div className='form-input--container'>
                            <input className='form-input' 
                                type='text' 
                                name='password' 
                                required 
                                placeholder='Password'
                                disabled={ disabled } / >
                            <div className='input-border-bottom'></div>
                        </div>
                    </label>
                    <div className='form-footer-info'>
                        <p className='form-footer-info-text'>By proceeding, you consent to get email or SMS messages, including by automated means, from Tomorrow [tm] and its affiliates to the email provided.</p>
                    </div>
                </form>
            </div>
            <div className='submit-form-button--container'>
                <button type='submit' className='submit--button'>
                    Signin
                </button>
            </div>
        </div>
    )
}
