
import validator from 'validator';

/* react imports */
import { useEffect, useState } from 'react';

/* style imports */
import './MyAccount.css';

/* API imports */
import API from '../../assistant/api';

/* component imports */
import { Footer } from '../../components/Footer/Footer';

/* icon imports */
import EditIcon from 'remixicon-react/PencilFillIcon';
import WarningIcon from 'remixicon-react/ErrorWarningLineIcon';

export const MyAccount = ( ) => {
    const [ account, setAccount ] = useState<any>( );
    const [ disabled, setDisabled ] = useState<boolean>(true);
    const [ editing, setEditing ] = useState<boolean>(false);

    const [ newName, setNewName ] = useState<string>("");
    const [ newEmail, setNewEmail ] = useState<string>("");
    const [ newState, setNewState ] = useState<string>("");

    useEffect(() => {
        setEditing(!editing);
        console.log(editing);
    }, [disabled]);

    useEffect( () => {
        const getAccount = async () => {
            let data = await API.getMe();
            console.log(data);
            setAccount(data);
            setNewName(data[0]?.name);
            setNewEmail(data[0]?.email);
            setNewState(data[0]?.state);
        }
        getAccount();
    }, [])

    const handleSaveClick = async ( ) => {
        setDisabled(true)
        if (newName === account[0].name && newEmail === account[0].email) {
            window.alert("Please, change your information before save it.");
        } else {
            if (newName.trim() !== "" && validator.isEmail(newEmail)) {
                await API.editMe(newName, newEmail);
                window.location.href = "/";
            } else {
                window.alert("Some informations are wrong. Please, check the values and try again")
            }
        }
        
    }

    const handleDeleteClick = async () => {
        await API.deteleMe();
        window.location.href = "/";
    }

    return (
        <div className="MyAccount page">
            <div className='my-account-section--container'>
                <div className='my-account-section-inner--container'>
                    <div className='my-account-info--container'>
                        <header className='my-account-info--header'>
                            <p className='my-account-info--header-title'>My account</p>
                        </header>
                        <div className='my-account-info-body--container'>
                            <div className='edit-and-save-section--container'>
                                <button id='edit-my-account-button' onClick={ () => setDisabled(!disabled) }>
                                    <EditIcon className='edit-icon' />
                                    Edit
                                </button>
                                <button id='save-my-account-button' onClick={ handleSaveClick }>
                                    Save 
                                </button>
                            </div>
                            <div className='my-account-info' id='my-account-full-name'>
                                <label className='my-account-label'>
                                    <span>Name</span>
                                    <input type='text' 
                                        value={ account && newName === account[0].name ? account[0].name : newName}
                                        id='my-account-name-input'
                                        onChange={ (e) => setNewName(e.target.value)}
                                        disabled={disabled}
                                        className='my-account-body-input' />
                                </label>
                            </div>
                            <div className='my-account-info' id='my-account-email'>
                                <label className='my-account-label'>
                                    <span>Email</span>
                                    <input type='text' 
                                        value={ account && newEmail === account[0].email ? account[0].email : newEmail}
                                        id='my-account-name-input'
                                        onChange={ (e) => setNewEmail(e.target.value)}
                                        disabled={disabled}
                                        className='my-account-body-input' />
                                </label>
                            </div>
                            <div className='my-account-info' id='my-account-state'>
                                <label className='my-account-label'>
                                    <span>State</span>
                                    <input type='text' 
                                        value={ account && newState === account[0].state ? account[0].state : newState}
                                        id='my-account-name-input'
                                        disabled
                                        className='my-account-body-input' />
                                </label>
                            </div>
                        </div>  
                        <footer className='my-account-info-footer--container'>
                            <div className='my-account-footer-info'>
                                <div className='my-account-info'>
                                    <label className='my-account-label'>
                                        <span>Access token</span>
                                        <input type='text' 
                                               value={ account ? account[0].token : '' } 
                                               disabled
                                               className='my-account-footer-input'/>
                                        <span className='input-warning'>Please, don't share your access token. It is your access to your account and to API resources.</span>
                                    </label>
                                </div>
                                <div className='my-account-info'>
                                    <label className='my-account-label'>
                                        <span>Debut date</span>
                                        <input type='text' 
                                               value={ account && account[0].date_created ? account[0].date_created : '__/__/__' } 
                                               disabled
                                               className='my-account-footer-input'/>
                                        <span className='input-warning'>Accounts created before Aug 2, date in which this feature was added, don't have access to their debut date. If you need this information, please contact us</span>
                                    </label>
                                </div>
                            </div>
                        </footer>
                        
                    </div>
                </div>

                <div className='delete-my-account-section--container'>
                    <div className='delete-my-account-section-inner--container'>
                        <header className='my-account-info--header'>
                            <p className='my-account-info--header-title'>Delete account</p>
                        </header>
                        <div className='my-account-info-body--container'>
                            <div className='my-account-info' id='delete-my-account'>
                                <div className='advice-section--container'>
                                    <WarningIcon id='warning-icon'/>
                                    <p>Be aware that after this action your data relative to your email, token, and all your ads will be destroyed.</p>
                                </div>
                                <div className='delete-account-button--container'>
                                    <button id='delete-account-button' onClick={ handleDeleteClick }>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
