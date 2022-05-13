import { createSlice } from '@reduxjs/toolkit';
import { CounterProps } from './index-interfaces';

const initialState: CounterProps = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state , action) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterProps, action) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;