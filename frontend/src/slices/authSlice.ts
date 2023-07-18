import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  email: string;
}

interface AuthState {
  userInfo: UserInfo | null;
}

const storedUserInfo = localStorage.getItem('userInfo');
const parsedUserInfo: UserInfo | null = storedUserInfo
  ? JSON.parse(storedUserInfo)
  : null;

const initialState: AuthState = {
  userInfo: parsedUserInfo,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
