
/* layout imports */
import { CreditsLayout } from "../../layouts/CreditsLayout/CreditsLayout"
import { SignupLayout } from "../../layouts/SignupLayout/SignupLayout"

/* css imports */
import './Signup.css';

export const Signup = ( ) => {
    return (
        <div className="Signup page">
            <SignupLayout />
            <CreditsLayout />
        </div>
    )
}
