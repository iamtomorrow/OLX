
import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./reducers/MenuReducer";

export const store = configureStore({
    reducer: {
        menu: MenuReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
