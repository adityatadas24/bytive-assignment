import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data.slice(0, 10);
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],

  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload; // Update tasks array with fetched data
    });
  },
});

export const { addTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
