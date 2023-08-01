
/* style imports */
import './CategorieLayout.css';

/* type imports */
import { CategorieProps } from '../../Types/CategorieTypes';

export const CategorieLayout = ( { _id, name, slug }: CategorieProps ) => {
    return (
        <div className="CategorieLayout" id={ _id }>
            <img src={`../../../public/media/images/icons/${slug}.svg`} className='category-icon' />
            <p className='category-name'>{ name }</p>
        </div>
    )
}
