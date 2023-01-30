import { createSlice } from '@reduxjs/toolkit'

export interface NameState {
  name: string
}

const initialState: NameState = {
  name: '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremenT: (state) => {
      state.name += ' +'
    },
    decremenT: (state) => {
      state.name += ' -'
    },
  },
})

// Action creators are generated for each case reducer function
export const { incremenT, decremenT } = counterSlice.actions

export default counterSlice.reducer