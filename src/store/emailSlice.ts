import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    rememberedEmail: '',
  },
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.rememberedEmail = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;
