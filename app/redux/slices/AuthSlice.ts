import {createSlice} from '@reduxjs/toolkit';
import {authService} from '../services/AuthService';

const initialState = {
  tokenDetails: null,
  userDetails: null,
  eventsData: null,
  notificationsData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogout: (state, action) => {
      state.tokenDetails = null;
      state.userDetails = null;
    },
    setEventsData: (state, action) => {
      state.eventsData = action.payload;
    },
    setNotificationsData: (state, action) => {
      state.notificationsData = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        authService.endpoints.login.matchFulfilled,
        (state, {payload}) => {
          console.log('hi1', payload);
          if (payload.code === 0) {
            console.log('login successful', payload);
            state.tokenDetails = payload.data.token_details;
            state.userDetails = payload.data.user;
          }
        },
      )
      .addMatcher(
        authService.endpoints.createNewUser.matchFulfilled,
        (state, {payload}) => {
          console.log('Registration', payload);
          if (payload.code === 0) {
            console.log('Registration successful', payload);
          }
        },
      )
      .addMatcher(
        authService.endpoints.changePassword.matchFulfilled,
        (state, {payload}) => {
          // console.log('no', payload);
          if (payload.code === 0) {
            console.log('Password changed', payload);
          }
        },
      )
      .addMatcher(
        authService.endpoints.forgotPassword.matchFulfilled,
        (state, {payload}) => {
          //  console.log('no',payload);
          if (payload.code === 0) {
            console.log('successful', payload);
          }
        },
      )
      .addMatcher(
        authService.endpoints.getEvents.matchFulfilled,
        (state, {payload}) => {
          if (payload.code === 0) {
            state.eventsData = payload.data;
          } else {
            console.error('Failed to fetch events:', payload.message);
          }
        },
      )
      .addMatcher(
        authService.endpoints.getNotifications.matchFulfilled,
        (state, {payload}) => {
          if (payload.code === 0) {
            state.notificationsData = payload.data;
          } else {
            console.error('Failed to fetch notifications:', payload.message);
          }
        },
      );
  },
});

export const {isLogout, setEventsData,setNotificationsData} = authSlice.actions;

export default authSlice.reducer;
