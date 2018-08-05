import { Route, Redirect } from 'react-router-dom';
// import {connect} from 'react-redux'

const PrivateRoute = ({
  component: Component,
  isAuthenticated = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathName: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

// function mapStateToProps({ authedUser }) {
//   return {
//     authedUser
//   };
// }

export default PrivateRoute;
