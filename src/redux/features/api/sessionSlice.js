import { createSlice } from '@reduxjs/toolkit'

const sessionSclice = createSlice({
    name: "session",
    initialState: {
        status: "idle",
        session: [],
        error: false,
    },
    reducers: {
        loadingTime: (state, action) => {
            state.status = "Loading";
        },
        successTime: (state, action) => {
            state.session = action.payload;
            state.status = "success";
        },
        errorTime: (state, action) => {
            state.session = [];
            state.status = "error";
        },
    },
});

export const sessionAction = sessionSclice.actions;
export const sessionReducer = sessionSclice.reducer;