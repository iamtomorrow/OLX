
/* API imports */
import API from '../../assistant/api';

/* react imports */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* icon imports */
import HeartIcon from 'remixicon-react/HeartLineIcon';
import FlagIcon from 'remixicon-react/FlagLineIcon';
import ShareIcon from 'remixicon-react/ShareLineIcon';

/* type imports */
import { AdProps } from '../../Types/AdTypes';

/* style imports */
import './AdLayout.css';

export const AdLayout = () => {
    const [ad, setAd] = useState<AdProps>();
    const { id } = useParams();

    useEffect(() => {
        const getAd = async () => {
            let data = await API.getAd(id as string, "");
            setAd(data?.ad[0]);
        }
        getAd();
    }, []);

    return (
        <div className='AdLayout'>
            <div className='ad-top--layout'>
                <div className='ad-bar--container'>
                    <div className='ad-bar-header--container'>
                        <p className='ad-name ad-header-info'>{ad?.name}</p>
                        <p className='ad-date-created ad-header-info'>Pubished at: {ad?.date_created}</p>
                        <p className='ad-id ad-header-info'>Code: {ad?._id}</p>
                    </div>
                    <div className='ad-bar-carousel--container'>
                        <img className='ad-body-image' src={ad?.images[0].url} />
                    </div>
                    <div className='ad-bar-footer--container'>
                        <p className='ad-price ad-footer-info'>$ {ad?.price}</p>
                        <p className='ad-id'>Code: {ad?._id}</p>
                    </div>
                    <div className='ad-bar-description--container'>
                        <span className='bar-title'>Product description:</span>
                        <p className='ad-description'>{ad?.description}</p>
                    </div>
                    <div className='ad-bar-details--container'>
                        <div className='ad-bar-location--container'>
                            <span className='bar-title'>Location</span>
                            <p className='ad-location'>{ad?.state}</p>
                        </div>
                        <div className='ad-bar-category--container'>
                            <span className='bar-title'>Category</span>
                            <p className='ad-location'>{ad?.category}</p>
                        </div>
                        <div className='ad-bar-views--container'>
                            <span className='bar-title'>Views</span>
                            <p className='ad-location'>{ad?.views}</p>
                        </div>
                    </div>
                </div>
                <div className='advertiser-bar--container'>
                    <div className='advertiser-bar-header--container'>
                        <div className='advertiser-avatar--container'>

                        </div>
                        <p className='advertiser-name'>{ad?.advertiser[0].name}</p>
                        <p className='advertiser-date'>{ad?.advertiser[0].state}</p>
                    </div>
                    <div className='advertiser-buttons--container'>
                        <button id='buy-now-button' className='advertiser-button'>Buy Now</button>
                        <button id='chat-button' className='advertiser-button'>Chat</button>
                    </div>
                </div>
            </div>
            <div className='ad-bottom--layout'>
                <div className='ad-options--layout'>
                    <div className='make-favorite-option ad-option'>
                        <HeartIcon />
                        <p>Make favorite</p>
                    </div>
                    <div className='share-option ad-option'>
                        <ShareIcon />
                        <p>Share</p>
                    </div>
                    <div className='flag-option ad-option'>
                        <FlagIcon />
                        <p>Flag ad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
