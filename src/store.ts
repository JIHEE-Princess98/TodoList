import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice';


const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;

export default store;
