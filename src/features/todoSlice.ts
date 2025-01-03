import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodo} from "../api/todoAPI.ts";

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}
interface TodoState{
    todo: Todo[];
    loading: boolean;
    error: string | null
}

// 초기상태
const initialState: TodoState = {
    todo: [],
    loading: false,
    error: null
}

// 비동기 thunk
export const getTodos = createAsyncThunk('todo/getTodo', async (_,{rejectWithValue}) => {
    try {
        return await fetchTodo();
    }catch (error: any){
        return rejectWithValue(error.message);
    }
});

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getTodo
            .addCase(getTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
                state.loading = false;
                state.todo = action.payload;
            })
            .addCase(getTodos.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default todoSlice.reducer;
