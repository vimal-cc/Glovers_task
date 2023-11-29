import {HTTPClient} from '../../utils/HttpsClient';
import {
  LOGIN,
  REGISTER,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  EVENTS_LIST,
  GET_NOTIFICATIONS,
} from '../../utils/URL';

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
    forgotPassword: build.mutation({
      query: forgotPassword => ({
        url: FORGOT_PASSWORD,
        method: 'POST',
        body: forgotPassword,
      }),
    }),
    getEvents: build.query({
      query: getEvents => ({
        url: EVENTS_LIST,
        method: 'GET',
        body: getEvents,
      }),
    }),
    getNotifications: build.query({
      query: ({ limit, offset }) => ({
        url:`${GET_NOTIFICATIONS}limit=${limit}&offset=${offset}`,
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
  useForgotPasswordMutation,
  useGetEventsQuery,
  useGetNotificationsQuery
} = authService;
