
import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./reducers/MenuReducer";
// import UserReducer from "./reducers/UserReducer";

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        // user: UserReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
