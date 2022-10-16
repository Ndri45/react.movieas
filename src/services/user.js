import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        signUpWithEmailAndPassword: async (state, action) => {
            const { email, password } = action.payload;
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            return { ...state, user };
        },
    },
});

const user = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export default user;
export const { signUpWithEmailAndPassword } = userSlice.actions;
