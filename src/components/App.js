import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loading } = this.props;
    const isAuthenticated = authedUser ? true : false;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {loading.default === 1 ? null : (
              <div>
                <PrivateRoute
                  path="/"
                  exact
                  component={Home}
                  isAuthenticated={isAuthenticated}
                />
                <Route path="/login" exact component={Login} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStatesToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar
  };
}

export default connect(mapStatesToProps)(App);
