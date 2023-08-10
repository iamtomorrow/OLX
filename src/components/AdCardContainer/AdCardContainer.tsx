
/* type imports */
import { AdProps } from '../../Types/AdTypes';

/* style imports */
import './AdCardContainer.css';

interface AdCardContainerProps {
    item: AdProps;
    keyItem: number;
}

export const AdCardContainer = ( { keyItem, item }: AdCardContainerProps ) => {

    const handleAdCardClick = ( id: string ) => {
        console.log(item);
        window.location.href = `/Ad/${id}`;
    }

    return (
        <div className="AdCardContainer" 
                key={keyItem}
                onClick={ () => handleAdCardClick(item._id) }>
            <div className='ad-card-inner--container'>
                <div className='ad-card-left--container'>
                    <div className='ad-card-image--container'>
                        { item.images[0] === undefined &&
                             <img className='ad-card-image' src={"../../public/media/images/backgrounds/default-ad-image.png"} />
                        }
                        { item.images.length &&
                             <img className='ad-card-image' src={ item.images[0].url } />
                        }
                    </div>
                </div>
                <div className='ad-card-right--container'>
                    <div className='ad-card-name--container'>
                        <p className='ad-card-name'>{ item.name.substring(0, 40) }</p>
                    </div>
                    <div className='ad-card-price--container'>
                        <p className='ad-card-price'>$ { item.price }</p>
                    </div>
                    <div className='ad-card-date--container'> 
                        <p className='ad-card-date'>{ item.date_created }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
