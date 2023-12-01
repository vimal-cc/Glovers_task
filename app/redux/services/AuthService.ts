import {HTTPClient} from '../../utils/HttpsClient';
import {
  LOGIN,
  REGISTER,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  GET_NOTIFICATIONS,
  EVENTS_LIST,
  GAME_LIST,
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
    getNotifications: build.query({
      query: ({limit, offset}) => ({
        url: `${GET_NOTIFICATIONS}limit=${limit}&offset=${offset}`,
        method: 'GET',
      }),
    }),
    getEventsList: build.query({
      query: ({limit, offset}) => ({
        url: `${EVENTS_LIST}?limit=${limit}&offset=${offset}`,
        method: 'GET',
      }),
    }),
    getGameList: build.query({
      query: ({limit, offset}) => ({
        url: `${GAME_LIST}?limit=${limit}&offset=${offset}`,
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
  useGetNotificationsQuery,
  useGetEventsListQuery,
  useGetGameListQuery,
} = authService;
