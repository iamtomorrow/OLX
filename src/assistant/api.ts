import Cookies from "ts-cookies";

const baseUrl = 'http://localhost:3200';

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
        let response = await fetch("http://localhost:3200/states", { method: "GET" });
        let data = await response.json();
        return data?.result;
    }
};

export default API;
