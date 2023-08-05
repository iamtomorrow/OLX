
/* style imports */
import './CategorieLayout.css';

/* type imports */
import { CategorieProps } from '../../Types/CategorieTypes';

export const CategorieLayout = ( { _id, name, slug }: CategorieProps ) => {

    return (
        <div className="CategoryLayout" id={ _id } >
            <img src={`../../../public/media/images/icons2/${slug}.png`} className='category-icon' />
            <p className='category-name'>{ name }</p>
        </div>
    )
}
