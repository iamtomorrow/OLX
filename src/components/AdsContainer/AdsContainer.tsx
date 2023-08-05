
/* icon imports */
import ArrowLeftIcon from 'remixicon-react/ArrowDropLeftLineIcon';
import ArrowRightIcon from 'remixicon-react/ArrowDropRightLineIcon';

/* API imports */
import API from '../../assistant/api';

/* react imports */
import { useEffect, useState } from 'react';

/* type imports */
import { AdsContainerProps } from '../../Types/AdsContainerTypes';
import { AdProps } from '../../Types/AdTypes';

/* style imports */
import './AdsContainer.css';
import { AdItem } from '../AdItem/AdItem';

export const AdsContainer = ( { id, label }: AdsContainerProps ) => {
    const [ ads, setAds ] = useState<AdProps[]>([]);

    useEffect( () => {
        
    }, []);

    useEffect( () => {
        const getAds = async ( ) => {
            let data = await API.getAds();
            setAds( data );
            // console.log(ads);
        }
        getAds();
    }, []);

    return (
        <div className='AdsContainer' id={`ads--container-${id}`}>
            <div className='scroll-back--button scroll-button'>
                <ArrowLeftIcon className='scroll-icon' />
            </div>
            <div className='ads--header--container'>
                <p>{ label }</p>
            </div>
            <div className='scroll-next--button scroll-button'>
                <ArrowRightIcon className='scroll-icon' />
            </div>
            <div className='ads-carousel--container'>
                { ads &&
                    ads.map((item, key) => (
                        <AdItem key={key} data={item} />
                    ))
                }
            </div>
        </div>
    )
}
