/* 
##
## Copyright (c) Tomorrow Group.
## Licensed under the MIT License.
##
*/

/* type imports */
import { AdProps } from '../../Types/AdTypes';

/* style imports */
import './AdBox.css';

interface AdBoxProps {
    boxKey: number;
    item: AdProps;
}

export const AdBox = ( { boxKey, item }: AdBoxProps ) => {
    return (
        <div className='AdBox' key={boxKey}>
            <div className='ad-box-left--container'>

            </div>
            <div className='ad-box-right--container'>
                <p>{ item.name }</p>
            </div>
        </div>
    )
}
