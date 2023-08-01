
import Cookies from "js-cookie";

const isLogged = ( ): boolean => {
    let token = Cookies.get("token");
    return token ? true : false;
}

const doLogin = ( tkn: string ) => {
    Cookies.set("token", tkn);
}

const logout = ( ) => {
    Cookies.remove("token");
}

export { isLogged, doLogin, logout };
