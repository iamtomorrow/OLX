
/* routes imports */
import { useLocation } from 'react-router-dom';

/* component imports */
import { Header } from '../../components/Header/Header';
import { AdBox } from '../../components/AdBox/AdBox';

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

export const Ads = ( ) => {
    const URLParams = () => new URLSearchParams(useLocation().search);
    const query = URLParams();

    const [ state, setState ] = useState<string>(`${ query.get("state") !== null ? query.get("state") : "" }`);
    const [ category, setCategory ] = useState<string>(`${ query.get("category") !== null ? query.get("category") : "" }`);
    const [ ads, setAds ] = useState<AdProps []>([]);

    // console.log(category);
    // console.log(state);

    useEffect( () => {
        console.log("...");
        const getAds = async ( ) => {
            let data = await API.getAds(category, state);
            setAds(data);
            console.log(data);
        }
        getAds();
    }, []);

    return (
        <div className="Ads page">
            <Header />
 
            { ads &&
                ads.map((item, index:number) => 
                    <AdBox boxKey={index} item={item} />
                )
            }
        </div>
    )
}
