export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER';
export const LOGIN_AUTHED_USER = 'LOGIN_AUTHED_USER';
export const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER';

export function receiveAuthedUser(id) {
  return {
    type: RECEIVE_AUTHED_USER,
    id
  };
}

export function loginAuthedUser(id) {
  return {
    type: LOGIN_AUTHED_USER,
    id
  };
}

export function logoutAuthedUser() {
  return {
    type: LOGOUT_AUTHED_USER
  };
}
