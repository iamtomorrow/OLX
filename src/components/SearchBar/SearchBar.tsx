
/* API imports */
import API from '../../assistant/api';

/* icon imports */
import SearchIcon from 'remixicon-react/SearchLineIcon';

import './SearchBar.css';

/*routes imports */
import { useLocation } from 'react-router-dom';

/* react imports */
import React, { useEffect, useState } from 'react';

/* type imports */
import { StateProps } from '../../Types/StateTypes';
import { CategorieProps } from '../../Types/CategorieTypes';

export const SearchBar = ( ) => {
    const URLParams = () => new URLSearchParams(useLocation().search);
    const query = URLParams();

    const [ states, setStates ] = useState<StateProps[]>([]);
    const [ categories, setCategories ] = useState<CategorieProps[]>([]);
    const [ keyword, setKeyword ] = useState<string>("");

    const [ state, setState ] = useState<string>("");
    const [ category, setCategory ] = useState<string>("");

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

    useEffect( ( ) => {
        setCategory( query?.get("category") ? query.get("category") as string : "");
        setState( query?.get("state") ? query.get("state")  as string : "" );
        setKeyword( query?.get("keyword") ? query.get("keyword") as string : "" );
    }, []);

    const handleCategoryClick = ( slug: string ) => {
        console.log("slug: ", slug, "cat: ", category);
        if (slug === category) {
            setCategory("");
        } else {
            setCategory(slug);
        }
    }

    const handleSearchInput = async ( ) => {
        state ? query.set("state", state) : "";
        category ? query.set("category", category) : "";
        keyword ? query.set("keyword", keyword) : "";
        window.location.href = query ? `/Ads?${query}` : "/Ads";
    }

    return (
        <div className="SearchBar">
            <div className='search-bar--container'>
                <input id='search-input' 
                        placeholder="Search..." 
                        value={keyword}
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} />
                <div className='search-side-bar--container'>
                    <SearchIcon id='search-bar-icon' 
                                className='search-bar-icon' 
                                onClick={ handleSearchInput } />
                    {/* <EqualizerFillIcon id='toggle-filters-icon' 
                                       className="search-bar-icon" /> */}
                    <div className='filter-states--container'>
                        <select className='state-filter-bar'>
                            <option>{state}</option>
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
                        <div className={`CategoryLayout ${category === item.slug ? "category-layout--active" : ""}`}
                            id={ item._id } 
                            key={index}
                            onClick={ ( ) => handleCategoryClick(item.slug) }>
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

/* 
<CategorieLayout key={index}
item={item}
handleClick={ handleCategoryClick } 
/>
*/
