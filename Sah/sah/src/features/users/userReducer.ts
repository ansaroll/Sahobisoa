import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../models/User";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users:[] as TUser[],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            });
        }
    }
});

export const { addUser, removeUser, updateUser } = userSlice.actions
export default userSlice.reducer


// Path: src\features\users\userSlice.ts