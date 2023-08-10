
/* style imports */
import './CategorieLayout.css';

/* type imports */
import { CategorieProps } from '../../Types/CategorieTypes';

/* react imports */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* redux imports */

interface CategoryLayoutProps {
    item: CategorieProps;
    handleClick: (  name: string, id: string, slug: string ) => void;
}

export const CategorieLayout = ( { item, handleClick }: CategoryLayoutProps ) => {
    // const URLParams = () => new URLSearchParams(useLocation().search);
    // const query = URLParams();

    const [ categoryActive, setCategoryActive ] = useState<boolean>(false);

    const activateCategory = ( ) => {
        if (categoryActive) {
            setCategoryActive(false);
        }
        setCategoryActive(!categoryActive);
        console.log(categoryActive);
    }

    return (
        <div className={`CategoryLayout ${categoryActive ? "category-layout--active" : ""}`} 
             key={item._id}
             id={ item.slug } 
             onClick={ () => { handleClick(item.name, item._id, item.slug); activateCategory() } } >

            <img src={`../../../public/media/images/icons2/${item.slug}.png`} className='category-icon' />
            <p className='category-name'>{ item.name }</p>
        </div>
    )
}
