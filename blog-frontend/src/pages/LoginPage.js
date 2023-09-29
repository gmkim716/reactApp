import AuthTemplate from '../components/Auth/AuthTemplate';
import AuthForm from '../components/Auth/AuthForm';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
      {/* <AuthForm type="login" /> */}
    </AuthTemplate>
  );
};

export default LoginPage;
