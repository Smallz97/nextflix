import { createSlice } from "@reduxjs/toolkit";
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebaseConfig";

export const authenticationSlice = createSlice({
  name: "authenticator",
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
    createdNewUser: (state, action) => {
      (state.loading = false), (state.user = action.payload);
      state.authenticated = true;
    },
    loggingUserIn: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    loggedUserIn: (state, action) => {
      (state.loading = false), (state.user = action.payload);
      state.authenticated = true;
    },
    setFailureMessage: (state, action) => {
      state.loading = false;
      state.authenticated = false;
      state.errorMessage = action.payload;
    },
    setAuthState: (state, action) => {
      state.authenticated = action.payload;
    },
  },
});

export const {
  creatingUser,
  createdNewUser,
  loggingUserIn,
  loggedUserIn,
  setFailureMessage,
  setAuthState,
} = authenticationSlice.actions;

// Defining a thunk that checks the authentication state of a user and sets the store state
export const checkAuthState = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      dispatch(setAuthState(true));
    } else {
      dispatch(setAuthState(false));
    }
  });
};

// Defining a thunk that creates a new user and dispatches an action with the result
export const createNewUser = (email, password) => async (dispatch) => {
  dispatch(creatingUser());
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = createdUser.user.toJSON();
    dispatch(createdNewUser(user));
    dispatch(checkAuthState());
  } catch (error) {
    const errorMessage = error.message;
    dispatch(setFailureMessage(errorMessage));
  }
};

// Defining a thunk that logs a new user and dispatches an action with the result
export const logNewUserIn = (email, password) => async (dispatch) => {
  dispatch(loggingUserIn());
  try {
    const loggedInUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = loggedInUser.user.toJSON();
    dispatch(loggedUserIn(user));
    dispatch(checkAuthState());
  } catch (error) {
    const errorMessage = error.message;
    dispatch(setFailureMessage(errorMessage));
  }
};

export default authenticationSlice.reducer;
