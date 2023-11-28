import {HTTPClient} from '../../utils/HttpsClient';
import {LOGIN, REGISTER, CHANGE_PASSWORD,FORGOT_PASSWORD} from '../../utils/URL';

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
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useCreateNewUserMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
} = authService;
