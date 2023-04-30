import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
  projectValue: 0,
  expValue: 0,
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addProjectValue: (state, action) => {
      console.log(action.payload)
      state.projectValue = action.payload
    },
    addExpValue: (state, action) => {
      console.log(action.payload)
      state.expValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProjectValue, addExpValue } = cardSlice.actions

export default cardSlice.reducer
