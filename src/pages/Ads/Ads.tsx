
/* routes imports */
import { useLocation } from 'react-router-dom';

/* component imports */
import { Header } from '../../components/Header/Header';

/* style imports */
import './Ads.css';

/* react imports */
import { useEffect, useState } from 'react';
import API from '../../assistant/api';

/* type imports */
// import { StateProps } from '../../Types/StateTypes';
import { AdProps } from '../../Types/AdTypes';

/* icon imports */
import MapPin from "remixicon-react/MapPinLineIcon";
import { AdCardContainer } from '../../components/AdCardContainer/AdCardContainer';
import { PromoBanner } from '../../layouts/PromoBanner/PromoBanner';
import { Footer } from '../../components/Footer/Footer';

export const Ads = ( ) => {
    const URLParams = () => new URLSearchParams(useLocation().search);
    const query = URLParams();

    const [ state, setState ] = useState<string>(`${ query.get("state") !== null ? query.get("state") : "" }`);
    const [ category, setCategory ] = useState<string>(`${ query.get("category") !== null ? query.get("category") : "" }`);
    const [ keyword, setKeyword ] = useState<string>(`${ query.get("keyword") !== null ? query.get("keyword") : "" }`);
    const [ ads, setAds ] = useState<AdProps []>([]);

    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect( () => {
        const getAds = async ( ) => {
            setLoading(true);
            let data = await API.getAds(query);
            setAds(data);
            setLoading(false);
        }
        getAds();
    }, []);

    return (
        <div className="Ads page">
            <Header />
            <PromoBanner />
            <div className='ads-header-info-container'>
                <div className='ads-header-info-inner--container '>
                    { ads && <p className='ad-header-info-p'>{ads.length} {ads.length > 1 ? "results were" : "result was"} found.</p>}
                    { !ads && <p className='ad-header-info-p'>No results were found.</p> }
                    <p className='ad-header-info-p'>{keyword ? `'${keyword}'` : ""} {category.toLocaleUpperCase() } in {state ? state : " Brazil"}</p>
                </div>
            </div>
            { loading && <p>Loading...</p> }
            { ads &&
                ads.map((item, index:number) => 
                    <>
                        <AdCardContainer item={item} keyItem={index} key={index} />
                        <div className='ad-card-division-line'></div>
                    </>
                )
            }
            <Footer />
        </div>
    )
}
