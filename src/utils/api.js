import {
  _getUsers,
  _getQuestions,
  _getAuthedUser,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveAuthedUser
} from './_DATA.js';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions(), _getAuthedUser()]).then(
    ([users, questions, authedUser]) => ({
      users,
      questions,
      authedUser
    })
  );
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function saveAuthedUser(id) {
  return _saveAuthedUser(id);
}
