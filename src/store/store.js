import {configureStore} from '@reduxjs/toolkit';

import messageSlice from './messageSlice';
import wordSlice from './wordSlice';

const store = configureStore({
    reducer:{message: messageSlice.reducer, word: wordSlice.reducer}
})

export default store;