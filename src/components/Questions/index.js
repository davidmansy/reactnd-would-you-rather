import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import filter from 'lodash/filter';

const Questions = ({ questionIds }) => {
  return (
    <div className="questions">
      <ul>
        {questionIds.map(id => (
          <li key={id} className="questions__list">
            <Question id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStatesToProps({ questions, authedUser }, { answered = false }) {
  return {
    questionIds: filter(questions, q => {
      return answered
        ? q.optionOne.votes.includes(authedUser) ||
            q.optionTwo.votes.includes(authedUser)
        : !q.optionOne.votes.includes(authedUser) &&
            !q.optionTwo.votes.includes(authedUser);
    })
      .sort((q1, q2) => q2.timestamp - q1.timestamp)
      .map(q => q.id)
  };
}

export default connect(mapStatesToProps)(Questions);
