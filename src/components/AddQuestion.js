import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Header from './Header';

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
      <div>
        <Header />
        <h1>Create New Question</h1>
        <p>Complete the question</p>
        <p>Would you rather...</p>
        <form onSubmit={this.handleAddQuestion}>
          <input
            type="text"
            value={optionOneText}
            onChange={this.handleOptionOneChange}
          />
          <div>OR</div>
          <input
            type="text"
            value={optionTwoText}
            onChange={this.handleOptionTwoChange}
          />
          <button disabled={isSubmitDisable} type="submit">
            Submit
          </button>
        </form>
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
