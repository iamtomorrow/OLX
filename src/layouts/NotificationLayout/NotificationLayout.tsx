

/* icon imports */
import NotsIcon from 'remixicon-react/NotificationLineIcon';

/* style imports */
import './NotificationLayout.css';

export const NotificationLayout = ( ) => {
    return (
        <div className='NotificationLayout'>
            <div className='notification-layout-inner--container'>
                <div className='notification-layout-header--container'>
                    <p className='notification-layout-header-p'>Notifications</p>
                    <NotsIcon />
                </div>
                <div className='notification-layout-body--container'>
                    <div className='notification-layout-card--container'>
                        One you have notifications, they will appear here.
                    </div>  
                </div>
            </div>
        </div>
    )
}