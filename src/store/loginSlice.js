import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: {},
    users: [],
    isAuthenticated: false,
    showModal: false,
  },
  reducers: {
    logUserIn: (state, action) => {
      const { loginEmail, loginPassword } = action.payload;
      const result = state.users.find((user) => user.data.email === loginEmail);
      if (result) {
        if (result.data.password === loginPassword) {
          console.log("Correct Password");
          state.isAuthenticated = true;
          state.currentUser = result;
        } else {
          alert("Incorrect Password");
        }
      } else {
        alert("No email found");
      }
    },

    logUserOut: (state) => {
      state.currentUser = {};
      state.isAuthenticated = false;
    },

    setUsers: (state, action) => {
      state.users = action.payload;
    },

    setCurrentUser: (state, action) => {
      const loginEmail = action.payload;
      const result = state.users.find((user) => user.data.email === loginEmail);
      state.currentUser = result;
    },

    showHideModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
