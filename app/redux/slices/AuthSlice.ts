import {createSlice} from '@reduxjs/toolkit';
import {authService} from '../services/AuthService';

const initialState = {
  tokenDetails: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogout: (state, action) => {
      state.tokenDetails = null;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        authService.endpoints.login.matchFulfilled,
        (state, {payload}) => {
          console.log('hi1', payload);
          if (payload.code === 0) {
            const navigation = useNavigation();
            navigation.navigate('Tab');
            state.tokenDetails = payload.token;
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
          console.log('no', payload);
          if (payload.code === 0) {
            console.log('Password changed', payload);
          }
        },
      )
      .addMatcher(
        authService.endpoints.getEventsList.matchFulfilled,
        (state, {payload}) => {
          console.log('no', payload);
          if (payload.code === 0) {
            console.log('events', payload);
          }
        },
      );
  },
});

export const {isLogout} = authSlice.actions;

export default authSlice.reducer;
