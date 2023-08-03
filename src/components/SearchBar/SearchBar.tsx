
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
    const [ searchInput, setSearchInput ] = useState<string>("");

    const [ toggleFilters, setToggleFilters ] = useState(false);

    useEffect( () => {
        const getCategories = async ( ) => {
            let data = await API.getCategories();
            setCategories( data );
            // console.log(states);
        }
        getCategories();
    }, []);

    useEffect( () => {
        const getStates = async ( ) => {
            let data = await API.getStates();
            setStates( data );
            // console.log(categories)
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
        alert(searchInput);
    }

    return (
        <div className="SearchBar">
            <div className='search-bar--container'>
                <input id='search-input' placeholder="Search..." onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} />
                <div className='search-side-bar--container'>
                    <SearchIcon id='search-bar-icon' className='search-bar-icon' onClick={ handleSearchInput } />
                    <EqualizerFillIcon id='toggle-filters-icon' className="search-bar-icon"
                            onClick={ handleToggle } />
                    <div className='filter-states--container'>
                        <select className='state-filter-bar'>
                            <option></option>
                            { states &&
                                states.map(item => (
                                    <option>{item?.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className={`search-bar-filter--active`}>
                { categories &&
                    categories.map(item => (
                        <CategorieLayout _id={item._id} name={ item.name } slug={ item.slug } />
                    ))
                }
            </div>
        </div>
    )
};
