import React, { Component } from 'react';
import Questions from './Questions';

class Home extends Component {
  state = {
    answered: false
  };

  handleSelectQuestionsType = (answered, e) => {
    e.preventDefault();
    this.setState(() => ({
      answered
    }));
  };

  render() {
    const { answered } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <button
              type="button"
              onClick={e => this.handleSelectQuestionsType(false, e)}
            >
              Unanswered Questions
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={e => this.handleSelectQuestionsType(true, e)}
            >
              Answered Questions
            </button>
          </li>
        </ul>
        <Questions answered={answered} />
      </div>
    );
  }
}

export default Home;
