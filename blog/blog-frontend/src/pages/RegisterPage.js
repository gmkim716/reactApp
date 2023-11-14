import React from 'react';
import AuthTemplate from '../components/common/auth/AuthTemplate';
import AuthForm from '../components/common/auth/AuthForm';
import RegisterForm from '../components/common/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      {/* <AuthForm type="register" /> */}
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
