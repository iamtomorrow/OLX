

import API from "../assistant/api"

const doSignin = ( email, password ) => {
    return API.signin(email, password);
}

export { doSignin };