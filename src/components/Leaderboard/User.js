import React, { Component } from 'react';
import { connect } from 'react-redux';

const SMALL_SIZE = '&size=80';
const WINNERS = ['gold', 'silver', 'bronze'];

class User extends Component {
  render() {
    const { user, rank } = this.props;
    const smallAvatarURl = `${user.avatar}${SMALL_SIZE}`;
    const questionsCreatedNumber = user.questions.length;
    const questionsAnsweredNumber = Object.keys(user.answers).length;
    const score = questionsCreatedNumber + questionsAnsweredNumber;
    const winner = rank < WINNERS.length ? WINNERS[rank] : '';

    return (
      <div className={`user ${winner ? `user--winner user--${winner}` : ''}`}>
        <div className="user__avatar__container">
          <img
            className="user__avatar"
            src={smallAvatarURl}
            alt="User avatar"
          />
        </div>
        <div className="user__content">
          <p className="user__name">{user.name}</p>
          <div className="user__questions__score">
            <span>Answered questions</span>
            <span>{questionsAnsweredNumber}</span>
          </div>
          <div className="user__questions__score">
            <span>Created questions</span>
            <span>{questionsCreatedNumber}</span>
          </div>
        </div>
        <div className="user__score">
          <div className="user__score__label">Score</div>
          <div className="user__score__container">
            <span className="user__score__digit">{score}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id, rank }) {
  const user = users[id];
  return {
    user,
    rank
  };
}

export default connect(mapStateToProps)(User);
