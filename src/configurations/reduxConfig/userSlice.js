import { createSlice } from "@reduxjs/toolkit";
import { auth, createUserWithEmailAndPassword } from "../firebaseConfig";

export const newUserSlice = createSlice({
  name: "newUser",
  initialState: {
    user: {},
    loading: false,
    errorMessage: null,
    authenticated: false,
  },
  reducers: {
    creatingUser: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    createdUser: (state, action) => {
      (state.loading = false), (state.user = action.payload);
      state.authenticated = true;
    },
    setFailureMessage: (state, action) => {
      state.loading = false;
      state.authenticated = false;
      state.errorMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { creatingUser, createdUser, setFailureMessage } =
  newUserSlice.actions;

// Defining a thunk that dispatches the action creators with async functions
export const createNewUser = (email, password) => async (dispatch) => {
  dispatch(creatingUser());
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(createdUser(user));

    // Log user object if retrieved successfully
    console.log("User logged successfully:", user);
  } catch (error) {
    const errorMessage = error.message;
    dispatch(setFailureMessage(errorMessage));
  }
};

export default newUserSlice.reducer;
