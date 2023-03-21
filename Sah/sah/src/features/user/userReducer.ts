import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../models/User";
import { RootState } from "../../app/store";

interface IUserState {
  value: TUser;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      lastName: "Rolland",
    } as TUser,
  } as IUserState,
  reducers: {
    addUser: (state, action: PayloadAction<TUser>) => {
      state.value = action.payload;
    },
    removeUser: (state, action: PayloadAction<TUser>) => {
      state.value = {};
    },
    updateUser: (state, action: PayloadAction<TUser>) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

// code pour selectionner un user
export const selectUser = (state: RootState) => state.user.value;

// Path: src\features\user\userlice.ts
