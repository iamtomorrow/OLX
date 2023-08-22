/* 
##
## Copyright (c) Tomorrow Group.
## Licensed under the MIT License.
##
*/

/* API imports */
import API from '../../assistant/api';

/* icon imports */
import SearchIcon from 'remixicon-react/SearchLineIcon';

import './SearchBar.css';

/*routes imports */
import { useLocation, useNavigate } from 'react-router-dom';

/* react imports */
import React, { useEffect, useState } from 'react';

/* type imports */
import { StateProps } from '../../Types/StateTypes';
import { CategorieProps } from '../../Types/CategorieTypes';

import qs from 'qs';

export const SearchBar = ( ) => {
    const URLParams = () => new URLSearchParams(useLocation().search);
    const query = URLParams();
    const navigator = useNavigate();

    const [ loading, setLoading ] = useState<boolean>(false);

    const [ states, setStates ] = useState<StateProps[]>([]);
    const [ categories, setCategories ] = useState<CategorieProps[]>([]);
    const [ keyword, setKeyword ] = useState<string>("");

    const [ state, setState ] = useState<string>("");
    const [ category, setCategory ] = useState<string>("");

    useEffect( () => {
        const getCategories = async ( ) => {
            setLoading(true);
            let data = await API.getCategories();
            setLoading(false);
            setCategories( data );
        }
        getCategories();
    }, []);

    useEffect( () => {
        const getStates = async ( ) => {
            setLoading(true);
            let data = await API.getStates();
            setLoading(false);
            setStates( data );
        }
        getStates();
    }, []);

    useEffect( ( ) => {
        setCategory( query?.get("category") ? query.get("category") as string : "");
        setState( query?.get("state") ? query.get("state")  as string : "" );
        setKeyword( query?.get("keyword") ? query.get("keyword") as string : "" );
    }, [loading]);

    const handleSearchInput = async ( ) => {
        let queryString = qs.stringify({ category, state, keyword });
        window.location.href = query ? `/Ads?${queryString}` : "/Ads";
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
                        <select className='state-filter-bar' placeholder='State'>
                            <option onClick={ ( ) => setState("") } className='state-filter-option'>{ state ? state : "Select" }</option>
                            { states &&
                                states.map((item, index) => (
                                    <option key={index} 
                                            className='state-filter-option'
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
                        <div className={`CategoryLayout ${item.slug === category ? "category-layout--active" : ""}`}
                            id={ item._id } 
                            key={index}
                            onClick={ ( ) => setCategory(`${item.slug !== category ? item.slug : '' }`) }>
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
