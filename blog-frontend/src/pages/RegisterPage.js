import AuthTemplate from '../components/Auth/AuthTemplate';
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
