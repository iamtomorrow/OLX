/* 
##
## Copyright (c) Tomorrow Group.
## Licensed under the MIT License.
##
*/

import Cookies from "ts-cookies";
import qs from 'qs';

// const baseUrl2 = 'http://localhost:3200';
const baseUrl = 'https://olx-api.onrender.com';

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
            let response = await fetch(`${baseUrl}/states`, 
            { 
                method: "GET" ,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
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
            let response = await fetch(`${baseUrl}/ads/?${endpoint}`,
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
            let response = await fetch(`${baseUrl}/ads/create/?${ qs.stringify({token})}`, 
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
            let response = await fetch(`${baseUrl}/users/me/?${qs.stringify({token})}`, 
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
    },

    editMe: async ( name?: string, email?: string ) => {
        let token = Cookies.get("token");
        try {
            let response = await fetch(`${baseUrl}/users/editme/?${qs.stringify({ token, name, email })}`, 
            {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let data = await response.json();
            return data;
        } catch (err) {
            console.log(err)
            return err;
        }
    },

    deteleMe: async ( ) => {
        let token = Cookies.get("token");
        try {
            let response = await fetch(`${baseUrl}/users/deleteme/?${qs.stringify({ token })}`, 
            {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let data = await response.json();
            Cookies.set("token", null);
            return data;
        } catch (err) {
            console.log(err)
            return err;
        }
    },

    getMyAds: async () => {
        let token = Cookies.get("token");
        try {
            let response = await fetch(`${baseUrl}/ads/myads/?${ qs.stringify({ token }) }`, 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    }
};

export default API;
