
import { toggleMenu } from '../../redux/reducers/MenuReducer';

/* reducer imports */
import { useDispatch } from 'react-redux';

/* react imports */
import { useState } from 'react';

/* icon imports */
import MenuIcon from 'remixicon-react/MenuFillIcon';

import './BurgerLayout.css'

export const BurgerLayout = ( ) => {
    const [ toggle, setToggle ] = useState<boolean>(false);

    const dispatch = useDispatch( );

    const setToggleMenu = ( toggle: boolean ) => {
        setToggle( !toggle );
        dispatch( toggleMenu(toggle));
    }

    return (
        <div className="BurgerLayout">
            <MenuIcon id='menu-icon' 
                        className='menu-icon' 
                        onClick={ () => setToggleMenu( toggle ) }/>
        </div>
    )
}
