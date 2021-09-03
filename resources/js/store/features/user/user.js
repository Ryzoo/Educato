import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    notifications: {
      count: 0,
    },
  },
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { incrementByAmount } = userSlice.actions;
export const authUser = (state) => state.user;
export const userDefaultValueProvider = (serverData) =>
  serverData.auth && serverData.auth.user
    ? {
        id: serverData.auth.user.id,
        email: serverData.auth.user.email,
        isVerified: serverData.auth.isVerified,
        name: serverData.auth.user.name,
        notifications: {
          count: 2,
        },
      }
    : {};

export default userSlice.reducer;
