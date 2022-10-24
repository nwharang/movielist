import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
    name: "api",
    initialState: {
        status: "idle",
        apiData: null,
        error: false,
    },
    reducers: {
        loadingTime: (state, action) => {
            state.status = "Loading";
        },
        successTime: (state, action) => {
            state.apiData = action.payload;
            state.status = "success";
        },
        errorTime: (state, action) => {
            state.apiData = null;
            state.status = "error";
        },
    },
});

export const apiAction = apiSlice.actions;
export const apiReducer = apiSlice.reducer;