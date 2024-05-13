import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';


interface assignTaskPackage {
  taskPackage: string[];
}

const initialState: assignTaskPackage = {
  taskPackage: [],
};

const assignTaskPackageSlice = createSlice({
  name: 'assignTaskPackage',
  initialState,
  reducers: {
    assignTaskPackage: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.taskPackage = [...state.taskPackage, action.payload];
    },
  },
});

export const { assignTaskPackage } = assignTaskPackageSlice.actions;

export const selectAssignTaskPackage = (state: RootState) => state.assignTaskPackage.taskPackage;

export default assignTaskPackageSlice.reducer;
