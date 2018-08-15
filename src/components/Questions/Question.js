import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const MEDIUM_SIZE = '&size=90';

class Question extends Component {
  handleViewPoll = e => {
    const { history, question } = this.props;
    e.preventDefault();
    history.push(`/question/${question.id}`);
  };

  render() {
    const { question, author } = this.props;
    const mediumAvatarURl = `${author.avatar}${MEDIUM_SIZE}`;
    return (
      <div className="questions__item">
        <div className="questions__item__user">{author.name} asks:</div>
        <div className="questions__item__content">
          <div className="questions__item__content__avatar__container">
            <img
              className="questions__item__content__avatar"
              src={mediumAvatarURl}
              alt="User avatar"
            />
          </div>
          <div className="questions__item__content__description">
            <p className="questions__item__content__description__intro">
              Would you rather
            </p>
            <p className="questions__item__content__text--truncated">
              {`...${question.optionOne.text}`}
            </p>
            <button
              className="questions__item__content__submit"
              onClick={this.handleViewPoll}
            >
              View Poll
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  return {
    question,
    author: users[question.author]
  };
}

export default withRouter(connect(mapStateToProps)(Question));
