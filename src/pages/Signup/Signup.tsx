
/* layout imports */
import { Header } from "../../components/Header/Header"
import { SideMenu } from "../../components/SideMenu/SideMenu"
import { CreditsLayout } from "../../layouts/CreditsLayout/CreditsLayout"
import { SignupLayout } from "../../layouts/SignupLayout/SignupLayout"

/* css imports */
import './Signup.css';

export const Signup = ( ) => {
    return (
        <div className="Signup page">
            <SideMenu />
            <Header />
            <SignupLayout />
            <CreditsLayout />
        </div>
    )
}
