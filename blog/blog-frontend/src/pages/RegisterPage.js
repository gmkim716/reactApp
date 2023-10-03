import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
// import AuthForm from '../components/Auth/AuthForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
      {/* <AuthForm type="register" /> */}
    </AuthTemplate>
  );
};

export default RegisterPage;
