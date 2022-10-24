import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: "order",
    initialState: {
        status: "idle",
        order: null,
        error: false,
    },
    reducers: {
        loadingTime: (state, action) => {
            state.status = "Loading";
        },
        successTime: (state, action) => {
            state.order = action.payload;
            state.status = "success";
        },
        errorTime: (state, action) => {
            state.order = null;
            state.status = "error";
        },
    },
});

export const orderAction = orderSlice.actions;
export const orderReducer = orderSlice.reducer;