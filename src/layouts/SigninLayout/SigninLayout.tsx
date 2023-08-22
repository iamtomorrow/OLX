
/* API imports */
import API from '../../assistant/api';
import { doLogin } from '../../assistant/authHandler';

/* react imports */
import { FormEvent, useState } from 'react';

/* layout imports */
import { ErrorLayout } from '../ErrorLayout/ErrorLayout';

/* type imports */
import { ErrorProps } from '../ErrorLayout/ErrorLayout';

/* style imports */
import './SigninLayout.css';
import { SignOptionsContainer } from '../SignOptionsContainer/SignOptionsContainer';

export const SigninLayout = ( ) => {
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ disabled, setDisabled ] = useState<boolean>(false);

    const [ error, setError ] = useState<boolean>(false);
    const [ errorLog, setErrorLog ] = useState<string>("");
    const [ errorLogs, setErrorLogs ] = useState< ErrorProps[] | any >([]);

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setDisabled( true );
        setErrorLog("");
        setErrorLogs("");
        let data = await API.signin(email, password);

        if ( data.error === undefined ) {
            setDisabled(false);
            setError(false);
            setErrorLog("");
            doLogin(data?.token);
            window.location.href = "/";
        } else {
            setDisabled(false);
            setError(true);

            if (data.error.errors ) {
                setErrorLogs( data.error.errors );
            } else {
                setErrorLog( data.error );
            }
        }
    }

    return (
        <div className='SigninLayout fm-sign--container'>
            <div className='signin-layout-header--container'>
                <h3 className='header-text'>Signin</h3>
            </div>
            
            <SignOptionsContainer name={"Signin"} />

            <div className='signin-layout-form--container'>
                <form className='signin-form' onSubmit={ handleSubmit }>
                    <label className='form-label'>
                        <div className='form-input--container'>
                            <input className='form-input' 
                                type='text' 
                                name='email' 
                                required 
                                placeholder='Email'
                                autoFocus
                                disabled={ disabled }
                                onChange={ (e) => setEmail(e.target.value) } />
                            <div className='input-border-bottom'></div>
                        </div>
                    </label>
                    <label className='form-label'>
                        <div className='form-input--container'>
                            <input className='form-input' 
                                type='password' 
                                name='password' 
                                required 
                                placeholder='Password'
                                disabled={ disabled } 
                                onChange={ (e) => setPassword(e.target.value) } />
                            <div className='input-border-bottom'></div>
                        </div>
                    </label>
                    {
                        error &&
                        <ErrorLayout errorLabel={ errorLog } errorLabels={ errorLogs } />
                    }
                    <div className='form-footer-info'>
                        <p className='form-footer-info-text'>By proceeding, you consent to get email or SMS messages, including by automated means, from Tomorrow [tm] and its affiliates to the email provided.</p>
                    </div>
                    <div className='submit-form-button--container'>
                        <button type='submit' className='submit-form-button' >Signin</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
