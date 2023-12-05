import {createSlice} from '@reduxjs/toolkit';
import {authService} from '../services/AuthService';
import {CommonActions} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const initialState = {
  tokenDetails: null,
  userDetails: null,
  notificationsData: null,
  eventsData: null,
  gameList: null,
  liveMatchList: null,
};

const showSnackbar = (message: string) => {
  Snackbar.show({
    text: message,
  });
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogout: (state, action) => {
      state.tokenDetails = null;
      state.userDetails = null;
    },
    setNotificationsData: (state, action) => {
      state.notificationsData = action.payload;
    },
    setEventsData: (state, action) => {
      state.eventsData = action.payload;
    },
    setGameList: (state, action) => {
      state.gameList = action.payload;
    },
    setliveMatchList: (state, action) => {
      state.gameList = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        authService.endpoints.login.matchFulfilled,
        (state, {payload}) => {
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
            showSnackbar('Password changed successfully');
          } else if (payload.code === 2) {
            console.log('Wrong password entered', payload);
            showSnackbar('Wrong old password entered');
          }
        },
      )
      .addMatcher(
        authService.endpoints.forgotPassword.matchFulfilled,
        (state, {payload}) => {
          //  console.log('no',payload);
          if (payload.code === 0) {
            console.log('successful', payload);
          } else if (payload.code === 2) {
            console.log('Wrong ', payload);
            showSnackbar('email entered is wrong');
          }
        },
      )
      .addMatcher(
        authService.endpoints.getNotifications.matchFulfilled,
        (state, {payload}) => {
          if (payload.code === 0) {
            state.notificationsData = payload.data;
          } else if (payload.code === 2) {
            console.error('Failed to fetch notifications:', payload.message);
          }
        },
      )
      .addMatcher(
        authService.endpoints.getEventsList.matchFulfilled,
        (state, {payload}) => {
          if (payload.code === 0) {
            state.eventsData = payload.data;
          } else if (payload.code === 2) {
            console.error('Failed to fetch events:', payload.message);
          }
        },
      )
      .addMatcher(
        authService.endpoints.getGameList.matchFulfilled,
        (state, {payload}) => {
          if (payload.code === 0) {
            state.gameList = payload.data;
            console.log('Game list fetched successfully', payload);
          } else if (payload.code === 2) {
            console.error('Failed to fetch game list:', payload.message);
          }
        },
      )
      .addMatcher(
        authService.endpoints.getLiveMatchList.matchFulfilled,
        (state, {payload}) => {
          if (payload.code === 0) {
            console.log('Live match list fetched successfully', payload);
            state.liveMatchList = payload.data;
          } else if (payload.code === 2) {
            console.error('Failed to fetch live match list:', payload.message);
            showSnackbar(' ');
          }
        },
      );
  },
});

export const {
  isLogout,
  setNotificationsData,
  setEventsData,
  setGameList,
  setliveMatchList,
} = authSlice.actions;

export default authSlice.reducer;
