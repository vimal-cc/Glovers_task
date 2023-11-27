import {HTTPClient} from '../../utils/HttpsClient';
import {LOGIN, REGISTER, CHANGE_PASSWORD,EVENTS_LIST} from '../../utils/URL';

export const authService = HTTPClient.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: loginReq => ({
        url: LOGIN,
        method: 'POST',
        body: loginReq,
      }),
    }),
    createNewUser: build.mutation({
      query: createNewUserReq => ({
        url: REGISTER,
        method: 'POST',
        body: createNewUserReq,
      }),
    }),
    changePassword: build.mutation({
      query: changePassword => ({
        url: CHANGE_PASSWORD,
        method: 'POST',
        body: changePassword,
      }),
    }),
    getEventsList: build.query({
      query: () => ({
        url: EVENTS_LIST,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useCreateNewUserMutation,
  useChangePasswordMutation,
} = authService;
