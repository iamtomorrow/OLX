
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        currentUser: "",
    },
    reducers: {
        setUser: ( state, action ) => {
            switch (action.type) {
                case "SIGNIN":
                    state.currentUser = action.payload;
                    break;
                case "LOGOUT":
                    state.currentUser = action.payload;
                    break;
            }
        }
    }
})

export const { setUser } = slice.actions;
export default slice.reducer;
