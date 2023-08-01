
/* auth imports */
import { doLogin } from '../../assistant/authHandler';

/* type imports */
import { StateProps } from '../../Types/StateTypes';
import { ErrorProps } from '../ErrorLayout/ErrorLayout';

/* API imports */
import API from '../../assistant/api';

/* react imports */
import React, { useEffect, useState } from 'react';

/*layout imports */
import { ErrorLayout } from '../ErrorLayout/ErrorLayout';
import { SignOptionsContainer } from '../SignOptionsContainer/SignOptionsContainer';

import "./SignupLayout.css";

export const SignupLayout = ( ) => {
    const [ disabled, setDisabled ] = useState<boolean>(false);
    const [ email, setEmail ] = useState<string>("");
    const [ name, setName ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ confirmPassword, setConfirmPassword ] = useState<string>("");
    const [ state, setState ] = useState<string>("");

    const [ error, setError ] = useState<boolean>(false);
    const [ errorLog, setErrorLog ] = useState<string>("");
    const [ errorLogs, setErrorLogs ] = useState< ErrorProps[] | any >([]);

    const [ stateList, setStateList ] = useState<StateProps[]>([]);

    useEffect( ( ) => {
        const getStates = async ( ) => {
            let states = await API.getStates();
            setStateList( states );
        }
        getStates();
    }, []);

    const handleSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setDisabled(true);
        setError(false);
        setErrorLog("");
        setErrorLogs("");

        if ( password === confirmPassword ) {
            let data = await API.signup(name, email, state, password);
            
            if ( data.error === undefined ) {
                setDisabled(false);
                setError(false);
                setErrorLog("");
                doLogin(data?.token);
                window.location.href = "/";
            } else {
                setDisabled(false);
                setError(true);

                if (data.error.errors) {
                    setErrorLogs( data.error.errors );
                } else {
                    setErrorLog( data.error );
                }
            }
        } else {
            setError(true);
            setDisabled(false);
            setErrorLog("Sorry, the passwords don't match. Please, check the password provided and try again!");
        }

    }

    return (
        <div className='SignupLayout fm-sign--container'>
            <div className='signin-layout-header--container'>
                <h3 className='header-text'>Signup</h3>
            </div>

            <SignOptionsContainer name={"Signup"} />

            <div className='signin-layout-form--container'>
                <form className='signin-form' >
                    <label className='form-label'>
                        <div className='form-input--container'>
                            <input className='form-input'
                                type='text' 
                                name='name' 
                                required 
                                placeholder='Name'
                                autoFocus
                                disabled={ disabled }
                                onChange={ (e) => setName(e.target.value) } />
                                <div className='input-border-bottom'></div>
                        </div>
                    </label>
                    <label className='form-label'>
                        <div className='form-input--container'>
                            <select placeholder='State' className='select-form--container'>
                                <option></option>
                                {
                                    stateList.map(i => <option onClick={ () => setState(i?.name) }>{i?.name}</option>)
                                }
                            </select>
                        </div>
                    </label>
                    <label className='form-label'>
                        <div className='form-input--container'>
                            <input className='form-input' 
                                type='text' 
                                name='email' 
                                required 
                                placeholder='Email'
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
                    <label className='form-label'>
                        <div className='form-input--container'>
                            <input className='form-input' 
                                type='password' 
                                name='confirm-password' 
                                required 
                                placeholder='Confirm password'
                                disabled={ disabled } 
                                onChange={ (e) => setConfirmPassword(e.target.value) } />
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
                </form>
            </div>
            <div className='submit-form-button--container'>
                <div className='submit-form-button--container'>
                <input type='submit' onClick={ handleSubmit } value={"Signup"} />
            </div>
            </div>
        </div>
    )
}