
import Cookies from "ts-cookies";

export const isLogged = ( ): boolean => {
    const token = Cookies.get("token");
    return token ? true : false;
}
