
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        name: "sd",
        email: "",
        token: ""
    },
    reducers: {
        setUser: ( state, action ) => {
            state.name = action.payload;
        }
    }
})

export const { setUser } = slice.actions;
export default slice.reducer;
