import React from 'react';
import AuthTemplate from '../components/common/auth/AuthTemplate';
import AuthForm from '../components/common/auth/AuthForm';
import LoginForm from '../components/common/auth/LoginForm';

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
