import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMessage: false
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        isShown(state){
            state.isShown = !state.isShown;
        }
    }
    
})

export const messageAction = messageSlice.actions;

export default messageSlice;