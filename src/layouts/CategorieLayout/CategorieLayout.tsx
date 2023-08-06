
/* style imports */
import './CategorieLayout.css';

/* type imports */
import { CategorieProps } from '../../Types/CategorieTypes';
import API from '../../assistant/api';

export const CategorieLayout = ( { _id, name, slug }: CategorieProps ) => {

    const handleClick = async ( catName: string ) => {
        window.location.href = `/Ads/?cateory=${catName}`;
    }

    return (
        <div className="CategoryLayout" id={ _id } onClick={ () => handleClick(slug) } >
            <img src={`../../../public/media/images/icons2/${slug}.png`} className='category-icon' />
            <p className='category-name'>{ name }</p>
        </div>
    )
}
