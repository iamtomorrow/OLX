
import { Header } from '../../components/Header/Header'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { SigninLayout } from '../../layouts/SigninLayout/SigninLayout'
import './Signin.css'

export const Signin = () => {
    return (
        <div className='Signin page'>
            <SideMenu />
            <Header />
            <SigninLayout />
        </div>
    )   
}
