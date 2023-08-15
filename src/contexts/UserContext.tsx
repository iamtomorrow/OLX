/* import { ReactNode, createContext, useReducer } from "react";
import { UserProps } from "../Types/UserTypes";
import { UserReducer } from "../redux/reducers/UserReducer";

export interface UserContextProps {
    user: UserProps | any;
}
interface ChildrenProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps | any>({ });

export const UserProvider = ( { children }: ChildrenProps ) => {
    const [ user, dispatch ] = useReducer(UserReducer, []);

    const updateUserContext = ( data: string ) => {
        // dispatchUser({ name: data })
    }

    return (
        <UserContext.Provider value={{ user, updateUserContext }}>
            { children }
        </UserContext.Provider> 
    )
 } */
 