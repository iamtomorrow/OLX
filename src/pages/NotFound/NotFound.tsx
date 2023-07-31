
import { Header } from '../../components/Header/Header';
import './NotFound.css';

export const NotFound = ( ) => {
    return (
        <div className='NotFound page'>
            <Header />
            <div className='not-found-message'>
                <h1>404</h1>
            </div>
        </div>
    )
}
