import React from 'react';
import LoginForm from '../containers/auth/LoginForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <div>
      <AuthTemplate>
        {/* <AuthForm type="login" /> */}
        <LoginForm />
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;
