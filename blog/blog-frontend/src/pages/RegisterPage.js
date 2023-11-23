import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      {/* <AuthForm type="register" /> */}
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
