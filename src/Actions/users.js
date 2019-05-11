import { _getUsers } from "../utils/_DATA";

export const GET_USERS = "GET_USERS";

export function getUsers() {
  return dispatch => {
    _getUsers().then(users => {
      dispatch(receiveUsers(users));
    });
  };
}

export function receiveUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}
