import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserType = boolean;
const initialState: UserType = localStorage.getItem('loggedIn') === 'true';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
