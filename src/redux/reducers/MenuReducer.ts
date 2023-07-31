
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "menu",
    initialState: {
        toggled: false,
    },
    reducers: {
        toggleMenu: ( state, action ): void => {
            state.toggled = action.payload;
        }
    }
})

export const { toggleMenu } = slice.actions;
export default slice.reducer;
