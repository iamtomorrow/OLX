
/* icon imports */
import SearchIcon from 'remixicon-react/SearchLineIcon';
import EqualizerFillIcon from 'remixicon-react/EqualizerFillIcon';

import './SearchBar.css';
import { useState } from 'react';

export const SearchBar = ( ) => {
    const [ toggleFilters, setToggleFilters ] = useState(false);

    const handleToggle = ( ) => {
        if (  toggleFilters ) {
            setToggleFilters(false);
        } else {
            setToggleFilters(true);
        }
    }

    return (
        <div className="SearchBar">
            <div className='search-bar--container'>
                <input id='search-input' placeholder="Search..." />
                <SearchIcon id='search-bar-icon' />
                <EqualizerFillIcon className='toggle-filters-icon' 
                        onClick={ handleToggle } />
            </div>
            <div className={`search-bar-filter${ toggleFilters ? "--active" : "" }`}>

            </div>
        </div>
    )
};
