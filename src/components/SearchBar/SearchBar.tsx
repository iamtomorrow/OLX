
/* icon imports */
import SearchIcon from 'remixicon-react/SearchLineIcon';

import './SearchBar.css';

export const SearchBar = ( ) => {
    return (
        <div className="SearchBar">
            <input id='search-input' placeholder="Search..." />
            <SearchIcon id='search-bar-icon' />
        </div>
    )
};
