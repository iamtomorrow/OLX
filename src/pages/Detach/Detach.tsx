
/* react imports */
import { LegacyRef, useEffect, useRef, useState } from 'react';

/* style imports */
import './Detach.css';

/* API imports */
import API from '../../assistant/api';

/* layout imports */
import { CategorieProps } from '../../Types/CategorieTypes';

/* type imports */
import { StateProps } from '../../Types/StateTypes';

/* icon imports */
import ArrowIcon from 'remixicon-react/ArrowLeftLineIcon';

/* icon imports */
import HelpIcon from 'remixicon-react/QuestionLineIcon';

/* routes imports */
import { Link } from 'react-router-dom';

export const Detach = ( ) => {
    const files = useRef() as React.LegacyRef<HTMLInputElement>;

    const [ stateList, setStateList ] = useState<StateProps []>([]);
    const [ categories, setCategories ] = useState<CategorieProps[]>([]);
    const [ adCategory, setAdCategory ] = useState<string>("");
    const [ adCategoryName, setAdCategoryName ] = useState<string>("");
    const [ categoryActive, setCategoryActive ] = useState<boolean>(false);

    const [ title, setTitle ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");
    const [ price, setPrice ] = useState<string>("");
    const [ priceNegotiable, setPriceNegotiable ] = useState<boolean>(false);
    const [ state, setState ] = useState<string>("");
    const [ images, setImages ] = useState<string[]>([]);

    useEffect( () => {
        const getCategories = async ( ) => {
            let data = await API.getCategories();
            setCategories(data);
        }
        getCategories();
    }, []);

    useEffect( ( ) => {
        const getStates = async ( ) => {
            let states = await API.getStates();
            setStateList( states );
        }
        getStates();
    }, []);

    const handleCategoryClick = ( categoryId: string, categoryName: string ) => {    
        setAdCategory( categoryId );
        setAdCategoryName( categoryName );
        setCategoryActive(true);
    }

    const handleGoBackClick = ( ) => {
        setAdCategory("");
        setAdCategoryName("");
        setCategoryActive(false);
    }

    const handleDetachClick = ( e: React.FormEvent<HTMLFormElement> ) => {  
        e.preventDefault();
        
        let detachErrors = [];
        if (title.trim() === "") {
            detachErrors.push("A valid title must be providaded.");
        }
        if (price === "") {
            detachErrors.push("A valid price must be provided!");
        }
        if (state === "") {
            detachErrors.push("A valid state must be provided!");
        }

        if (detachErrors.length === 0) {
            const formData = new FormData();
            formData.append("name", title);
            formData.append("category", adCategoryName.toLowerCase());
            formData.append("state", state);
            formData.append("price", price);
            formData.append("price_negotiable", priceNegotiable ? "true" : "false");
            formData.append("description", description);

            if (files) {
                if (files.current.files) {
                    for (let i in files.current.files) {
                        formData.append("images", files.current.files[i]);
                    }
                }
            }
            // alert(`${title}, ${adCategory}, ${state}, ${description}, ${price}, ${priceNegotiable}`);
            API.postAd(formData);
        }
    }

    return (
        <div className='Detach page'>
            <div className='detach--container'>
                <div className='detach-header--container'>
                    <div className='detach-top-header--container'>
                        <div className='go-home-icon--container'>
                            <Link to={"/"}>
                                <ArrowIcon className='go-back-icon' />
                            </Link>
                        </div>
                        <h2>What are you detaching?</h2>
                        <div className='help-icon--container'>
                            <Link to={"/Help"}>
                                <HelpIcon className='go-back-icon' />
                            </Link>
                        </div>
                    </div>

                    <div className='detach-categories--container'>
                        { categories &&
                            categories.map(item => (
                                <>
                                    <div className="CategoryLayout " id={ item._id } onClick={ () => handleCategoryClick(item._id, item.name) } >
                                        <img src={`../../../public/media/images/icons2/${item.slug}.png`} className='category-icon' />
                                        <p className='category-name'>{ item.name }</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                { categoryActive &&
                    <form className='detach-form--container'>
                        <div className='detach-form-header--container'>
                            <div className='go-back-icon--container' onClick={ handleGoBackClick}>
                                <ArrowIcon className='go-back-icon' />
                            </div>
                            <p className='detach-form-header-title'>{ adCategoryName }</p>
                        </div>
                        <div className='detach-form-body--container'>
                            <label className='form-label'>
                                <div className='form-input--container'>
                                    <input className='form-input' 
                                        type='text' 
                                        name='title' 
                                        required 
                                        placeholder='Title'
                                        autoFocus
                                        onChange={ (e) => setTitle(e.target.value) } />
                                    <div className='input-border-bottom'></div>
                                </div>
                            </label>
                            <label className='form-label'>
                                <div className='form-textarea--container'>
                                    <textarea className='form-textarea' 
                                        name='description' 
                                        required 
                                        placeholder='Description'
                                        autoFocus
                                        onChange={ (e) => setDescription(e.target.value) } ></textarea>
                                    <div className='input-border-bottom'></div>
                                </div>
                            </label>
                            <label className='form-label'>
                                <div className='form-input--container'>
                                    <input className='form-input' 
                                        type='text' 
                                        name='price' 
                                        required 
                                        placeholder='Price'
                                        prefix='$'
                                        onChange={ (e) => setPrice( e.target.value )} />
                                    <div className='input-border-bottom'></div>
                                </div>
                            </label>
                            <label className='form-label'>
                                <div className='form-input--container'>
                                    <input className='form-input' 
                                        type='checkbox' 
                                        name='price_negotiable'
                                        onClick={ () => setPriceNegotiable(!priceNegotiable) } />
                                    <div className='input-border-bottom'></div>
                                </div>
                            </label>
                            <label className='form-label'>
                                <select placeholder='State' className='select-form--container'>
                                    <option></option>
                                    {
                                        stateList.map(i => <option onClick={ () => setState(i.name) }>{i?.name}</option>)
                                    }
                                </select>
                            </label>
                            <label className='form-label'>
                                <div className='form-input--container'>
                                    <input className='form-input' 
                                        type='file' 
                                        name='files'
                                        ref={ files }
                                        accept='image/png, image/jpg, image/jpeg, image/webp'
                                        multiple />
                                    <div className='input-border-bottom'></div>
                                </div>
                            </label>
                        </div>
                        <div className='form-footer-info'>
                            <p className='form-footer-info-text'>A OLX não compartilha seus dados com empresas fora do grupo OLX Brasil que oferecem serviços similares.
O uso dos seus dados pode ser consultado na Política de privacidade, com a qual você concorda ao enviar o anúncio.</p>
                        </div>
                        <div className='submit-form-button--container'>
                            <button className='submit-form-button' onClick={ handleDetachClick }>
                                Detach
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}
