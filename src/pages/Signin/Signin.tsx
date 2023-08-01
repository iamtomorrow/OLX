
import { CreditsLayout } from '../../layouts/CreditsLayout/CreditsLayout'
import { SigninLayout } from '../../layouts/SigninLayout/SigninLayout'
import './Signin.css'

export const Signin = () => {
    return (
        <div className='Signin page'>
            <SigninLayout />
            <CreditsLayout />
        </div>
    )   
}
