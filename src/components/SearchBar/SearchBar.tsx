
/* API imports */
import API from '../../assistant/api';

/* layout imports */
import { CategorieLayout } from '../../layouts/CategorieLayout/CategorieLayout';

/* icon imports */
import SearchIcon from 'remixicon-react/SearchLineIcon';
import EqualizerFillIcon from 'remixicon-react/EqualizerFillIcon';

import './SearchBar.css';

/* react imports */
import { useEffect, useState } from 'react';

/* type imports */
import { StateProps } from '../../Types/StateTypes';
import { CategorieProps } from '../../Types/CategorieTypes';

export const SearchBar = ( ) => {
    const [ states, setStates ] = useState<StateProps[]>([]);
    const [ categories, setCategories ] = useState<CategorieProps[]>([]);
    const [ keyword, setKeyword ] = useState<string>("");

    const [ state, setState ] = useState<string>("");
    const [ category, setCategory ] = useState<string>("");

    const [ toggleFilters, setToggleFilters ] = useState(false);

    useEffect( () => {
        const getCategories = async ( ) => {
            let data = await API.getCategories();
            setCategories( data );
        }
        getCategories();
    }, []);

    useEffect( () => {
        const getStates = async ( ) => {
            let data = await API.getStates();
            setStates( data );
        }
        getStates();
    }, []);

    const handleToggle = ( ) => {
        if (  toggleFilters ) {
            setToggleFilters(false);
        } else {
            setToggleFilters(true);
        }
    }

    const handleSearchInput = async ( ) => {
        // alert(`${state}, ${category}, ${keyword}`);

        const stateQueryURL = `${state ? `state=${state}` : ""}`;
        const categoryQueryURL = `${category ? `category=${category}` : ""}`;

        let location = `/Ads${state || category ? "?" : ""}` + stateQueryURL + `${state && category ? "&" : ""}` + categoryQueryURL;
        alert(location);
        window.location.href = location;
    }

    return (
        <div className="SearchBar">
            <div className='search-bar--container'>
                <input id='search-input' 
                        placeholder="Search..." 
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} />
                <div className='search-side-bar--container'>
                    <SearchIcon id='search-bar-icon' 
                                className='search-bar-icon' 
                                onClick={ handleSearchInput } />
                    <EqualizerFillIcon id='toggle-filters-icon' className="search-bar-icon"
                            onClick={ handleToggle } />
                    <div className='filter-states--container'>
                        <select className='state-filter-bar'>
                            <option></option>
                            { states &&
                                states.map((item, index) => (
                                    <option key={index} 
                                            onClick={ ( ) => setState(item.name) }>
                                            {item?.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className={`category-bar-filter--active`}>
                { categories &&
                    categories.map((item, index) => (
                        <div className={`CategoryLayout`}
                            id={ item._id } 
                            key={index}
                            onClick={ ( ) => setCategory(item.slug) }>
                            <img src={`../../../public/media/images/icons2/${item.slug}.png`} 
                                className='category-icon' />
                            <p className='category-name'>{ item.name }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
