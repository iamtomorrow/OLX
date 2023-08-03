
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
import { Link } from 'react-router-dom';

export const AdLayout = () => {
    const [ ad, setAd ] = useState<AdProps>();
    let [ counter, setCounter] = useState<number>(0);
    const [ loading, setLoading] = useState<boolean>(true);
    const [ defaultImage, setDefaultImage ] = useState<string>("");

    const { id } = useParams();

    useEffect(() => {
        const getAd = async () => {
            let data = await API.getAd(id as string, "");
            setAd(data?.ad[0]);
            setLoading(false);
        }
        getAd();
    }, []);

    useEffect(() => {
        if (loading === false) {
            let len = ad?.images.length as number;
            setInterval( () => {
                // console.log(counter);
                setDefaultImage(ad?.images[counter].url as string);
                setCounter(counter+=1);
                if (counter === len) {
                    setCounter(counter = 0);
                }
            }, 5000)
        }
    }, [loading]); 

    return (
        <div className='AdLayout'>
            <div className='break-crumb--container'>
                <Link to={"/"} className='link'>
                    <span>Home /</span>
                </Link>
                <Link to={`/ads?state=${ad?.state}`} className='link'>
                    <span> {ad?.state} /</span>
                </Link>
                <Link to={`/ads?state=${ad?.state}&category=${ad?.category}`} className='link'>
                    <span> {ad?.category} /</span>
                </Link>
                <span> {ad?.name} </span>
            </div>
            <div className='ad-top--layout'>
                <div className='ad-bar--container'>
                    <div className='ad-bar-header--container'>
                        <p className='ad-name ad-header-info'>{ad?.name}</p>
                        <p className='ad-date-created ad-header-info'>Pubished at: {ad?.date_created}</p>
                        <p className='ad-id ad-header-info'>Code: {ad?._id}</p>
                    </div>
                    <div className='carousel'>
                        { ad?.images.length === 1 &&
                            <>
                                <img className='ad-body-image' src={ad?.images[0].url} />
                            </>
                        }
                        { ad?.images && ad.images.length > 1 &&
                            <>
                                <img src={defaultImage} className='ad-body-image' />
                            </>
                        }
                    </div>
                    <div className='ad-bar-footer--container'>
                        <p className='ad-price ad-footer-info'>$ {ad?.price}</p>
                        { ad?.price_negotiable &&
                            <p>Price negotiable</p>
                        }
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
                    <div className='advertiser-inner-bar--container'>
                        <div className='advertiser-bar-header--container'>
                            <div className='advertiser-avatar--container'>

                            </div>
                            <p className='advertiser-name'>{ad?.advertiser[0].name}</p>
                            <p className='advertiser-state'>{ad?.advertiser[0].state}</p>
                            { ad?.advertiser[0]?.date_created &&
                                <>
                                    <p className='advertiser-date'>On OLX since: {
                                    ad.advertiser[0].date_created.split(" ")[1]
                                    + " " + ad.advertiser[0].date_created.split(" ")[3]}</p>
                                </>
                            }
                        </div>
                        <div className='advertiser-buttons--container'>
                            <button id='buy-now-button' className='advertiser-button'>Buy Now</button>
                            <a id='contact-button' 
                                className='advertiser-button link' 
                                target='_blank' 
                                href={`mailto:${ad?.advertiser[0].email}`}>Contact</a>
                        </div>
                        <div className='security-tips--container'>

                        </div>
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
