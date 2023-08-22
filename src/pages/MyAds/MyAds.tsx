/* 
##
## Copyright (c) Tomorrow Group.
## Licensed under the MIT License.
##
*/

/* icon imports */
import AdsIcon from 'remixicon-react/AppsLineIcon';

/* react imports */
import { useEffect, useState } from 'react';

/* component imports */
import { Footer } from '../../components/Footer/Footer';

/* style imports */
import './MyAds.css';

/* API imports */
import API from '../../assistant/api';

/* type imports */
import { AdProps } from '../../Types/AdTypes';

export const MyAds = () => {
    const [ ads, setAds ] = useState<AdProps []>([]);

    useEffect(() => {
        const getMyAds = async () => {
            let data = await API.getMyAds();
            setAds(data.ads);
            console.log();
        }
        getMyAds();
    }, []);

    const handleCardClick = ( id: string ) => {
        window.location.href = `/Ad/${id}`;
    }

    return (
        <div className="MyAds page">
            <div className='MyAdsLayout'>
                <div className='my-ads-layout-inner--container'>
                    <div className='my-ads-layout-header--container'>
                        <p>My Ads</p>
                        <AdsIcon />
                    </div>
                    <div className='my-ads-layout-body--container'>
                    { !ads.length && 
                        <div className="my-ads-layout-card--container">
                            <p>Once you have ads, they will appear here.</p>
                        </div>
                    }
                    { ads &&
                        ads.map((item, index: number) => ( 
                            <div className='my-ads-layout-card--container' key={`${index}`} onClick={ () => handleCardClick(item._id) }>
                                <div className='my-ads-layout-card-inner--container'>
                                    <div className='card-image--container'>
                                        { !item.images[0] &&
                                            <img src={"/"} className='card-image' />
                                        }
                                        { item.images[0] &&
                                            <img src={ item.images[0].url } className='card-image' />
                                        }
                                    </div>
                                    <div className='ad-card-info--container'>
                                         <p>{ item.name.substring(0, 40) }</p>
                                         <p>{ item.price }</p>
                                         <p>{ item.category }</p>
                                         <p>{ item.status }</p>
                                         <p>{ item.date_created }</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
