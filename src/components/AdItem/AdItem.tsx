
/* route imports */
import { Link } from "react-router-dom";

/* type imports */
import { AdProps } from "../../Types/AdTypes";

/* style imports */
import "./AdItem.css";

interface AdItemProps {
    data: AdProps
}

export const AdItem = ( { data  }: AdItemProps ) => {
    const handleAdItemClick = ( id: string ) => {
        window.location.href = `/Ad/${id}`;
    }

    return (
        <div className="AdItem" 
             id={ data._id } 
             onClick={ () => handleAdItemClick(data._id) }>
            <div className="ad-item-inner--container">
                <div className="ad-item-body">
                    { data.images[0] === undefined &&
                        <img src={"../../public/media/images/backgrounds/default-ad-image.png"} className="ad-item-image" />
                    }
                    { data.images.length &&
                        <img src={ data.images[0].url } className="ad-item-image" /> 
                    }
                </div>
                <div className="ad-item-info">
                    <div className="ad-item-name">
                        <p>{ data.name.substring(0, 40) }</p>
                    </div>
                    <div className="ad-item-price">
                        <p>$ { data.price }</p>
                    </div>
                </div>
                <div className="ad-item-footer">
                    <Link to={"/"} id="see-details-link" className="link">
                        See details
                    </Link>
                </div>
            </div>
        </div>
    )
}
