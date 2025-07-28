import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=6';

const loadLocalUsers = () => {
  const localData = localStorage.getItem('users');
  return JSON.parse(localData);
};

export const fetchUsers = createAsyncThunk("Users/fetch", async () => {
  const localData = loadLocalUsers();
  if (localData) return localData;
  const res = await axios.get(API_URL);
  localStorage.setItem('users', JSON.stringify(res.data));
  return res.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, state => { state.loading = true; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase('users/addUser', (state, action) => {
        const newUser = {
          ...action.payload,
          id: Date.now(),
        };
        state.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(state.users));
      })
      .addCase('users/updateUser', (state, action) => {
        const index = state.users.findIndex(u => u.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
          localStorage.setItem('users', JSON.stringify(state.users));
        }
      })
      .addCase('users/deleteUser', (state, action) => {
        state.users = state.users.filter(u => u.id !== action.payload);
        localStorage.setItem('users', JSON.stringify(state.users));
      });
  }
});

export const addUser = (user) => ({ type: 'users/addUser', payload: user });
export const updateUser = (user) => ({ type: 'users/updateUser', payload: user });
export const deleteUser = (id) => ({ type: 'users/deleteUser', payload: id });

export default userSlice.reducer;
