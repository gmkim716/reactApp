import React from 'react';
import AuthTemplate from '../components/common/auth/AuthTemplate';
import AuthForm from '../components/common/auth/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;
