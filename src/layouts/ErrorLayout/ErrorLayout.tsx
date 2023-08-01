
import './ErrorLayout.css';

export interface ErrorProps {
    errorLabel: string,
    errorLabels: [{
        type: string,
        msg: string,
        path: string,
        location: string
    }]
}

export const ErrorLayout = ( { errorLabel, errorLabels }: ErrorProps ) => {
    return (
        <div className='ErrorLayout'>
            { errorLabel &&
                <p className='error-label'>{ errorLabel }</p>
            }
            { errorLabels &&
                <p className='error-label'>{ errorLabels[0].msg }</p>
            }
        </div>
    )
}
