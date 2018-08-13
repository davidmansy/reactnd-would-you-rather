import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <p className="login__title">Welcome to the Would You Rather App</p>
        <p>Please sign in to continue</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
