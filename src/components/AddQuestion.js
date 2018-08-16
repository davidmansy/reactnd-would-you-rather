import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    isSubmitDisable: true
  };

  handleOptionOneChange = e => {
    const optionOneText = e.target.value;
    this.setState(currentState => ({
      optionOneText,
      isSubmitDisable: optionOneText === '' || currentState.optionTwoText === ''
    }));
  };

  handleOptionTwoChange = e => {
    const optionTwoText = e.target.value;
    this.setState(currentState => ({
      optionTwoText,
      isSubmitDisable: optionTwoText === '' || currentState.optionOneText === ''
    }));
  };

  handleAddQuestion = e => {
    const { authedUser, history, dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    e.preventDefault();
    dispatch(
      handleAddQuestion({ optionOneText, optionTwoText, author: authedUser })
    );
    history.push('/');
  };

  render() {
    const { optionOneText, optionTwoText, isSubmitDisable } = this.state;
    return (
      <div className="addQuestion">
        <div className="addQuestion__title">Create New Question</div>
        <div className="addQuestion__content">
          <p className="addQuestion__instruction">Complete the question</p>
          <p className="addQuestion__startText">Would you rather...</p>
          <form onSubmit={this.handleAddQuestion} className="addQuestion__form">
            <input
              type="text"
              value={optionOneText}
              onChange={this.handleOptionOneChange}
              className="addQuestion__inputText"
              placeholder="Enter Option One Text Here"
            />
            <p className="addQuestion__inputText__separator">
              <span>OR</span>
            </p>
            <input
              type="text"
              value={optionTwoText}
              onChange={this.handleOptionTwoChange}
              className="addQuestion__inputText"
              placeholder="Enter Option Two Text Here"
            />
            <button
              disabled={isSubmitDisable}
              type="submit"
              className={`button__submit ${
                isSubmitDisable ? 'button__submit--disabled' : ''
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(AddQuestion));
