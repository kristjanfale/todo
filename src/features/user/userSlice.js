import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: 'Janez',
    lastName: 'Novak',
    mail: 'janez.novak@gmail.com',
    phone: '+386 41 666 666',
  },
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
