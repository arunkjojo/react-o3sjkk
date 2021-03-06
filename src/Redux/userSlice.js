import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Arun Jojo',
    email: 'arunkjojo@gmail.com',
    theme: 'light',
  },
  reducers: {
    save_profile: (state, action) => {
      state.name = action.payload.userName;
      state.email = action.payload.userEmail;
      state.theme = action.payload.userTheme;
    },
    // change_theme: (state, action) => {
    //   state.theme = action.payload.userTheme;
    // },
  },
});
export const { save_profile, 
  // change_theme 
} = userSlice.actions;
export default userSlice.reducer;
