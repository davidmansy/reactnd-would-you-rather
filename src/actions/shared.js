import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { receiveAuthedUser } from './authedUser';

export function getInitialData() {
  dispatch => {
    getInitialData().then(({ users, questions, authedUser }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(receiveAuthedUser(authedUser));
    });
  };
}
