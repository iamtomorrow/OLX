import Cookies from "ts-cookies";
import qs from 'qs';

/* redux imports */
import { setUser } from '../../src/redux/reducers/UserReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';

const baseUrl = 'http://localhost:3200';

interface PostAdProps {
    name: string,
    category: string,
    state: string,
    price: string,
    price_negotiable: string,
    description: string,
    images: [any]
}

const API = {
    signup: async ( name: string, email: string, state: string, password: string ) => {
        let response = await fetch(`${baseUrl}/users/signup`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                name, email, password, state
            })
        })
        let result = await response.json();
        console.log(result);
        return result;
    },

    signin: async ( email: string, password: string, tkn?: string ) => {
        if ( !tkn ) {
            let token = Cookies.get("token");
            if ( token ) {
                token = token ;
            }
        }

        try {
            let response = await fetch(`${baseUrl}/users/signin`, 
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    },

    getStates: async ( ) => {
        try {
            let response = await fetch("http://localhost:3200/states", { method: "GET" });
            let data = await response.json();
            return data?.result;
        } catch (err) {
            return err;
        }

    },

    getCategories: async ( ) => {
        try {
            let response = await fetch(`${baseUrl}/categories`);
            let data =  await response.json();
            return data?.categories;
        } catch (err) {
            return err;
        }
    },

    getAds: async ( 
        sort?: string, 
        limit?:number, 
        offset?:number, 
        category?:string, 
        state?:string, 
        keyword?:string ) => {
        let endpoint = qs.stringify({ sort, limit, offset, category, state, keyword });
        // console.log(endpoint);
        try {
            let response = await fetch(`${baseUrl}/ads?${endpoint}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    },

    getAd: async ( id: string, other?: false ) => {
        // const query = qs.stringify({id, other});
        try {
            let response = await fetch(`${baseUrl}/ads/${id}`, { method: "GET" });
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    },

    postAd: async ( body: any ) => {
        let token = Cookies.get("token");
        try {
            let response = await fetch(`${baseUrl}/ads/create?token=${token}`, 
            {
                method: "POST",
                body
            })
            let data = await response.json();
            // console.log(data);
            return data;
        } catch (err) {
            return err;
        }
    },

    getMe: async () => {
        let token = Cookies.get("token");
        // console.log(token);
        try {
            let response = await fetch(`${baseUrl}/users/me?${qs.stringify({token})}`, 
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            let data = await response.json();
            // console.log("data: ",data);
            return data.user;
        } catch (err) {
            return err;
        }
    }
};

export default API;
