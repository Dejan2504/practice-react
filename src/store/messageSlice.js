import { createSlice } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";

const initialState = {
    showMessage: false,
    someWords: false
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        isShown(state, action){
            state.isShown = !state.isShown;
            console.log(state.showMessage);
        },
    }
    
})



export const messageAction = messageSlice.actions;

export default messageSlice;