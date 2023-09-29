import AuthTemplate from '../components/Auth/AuthTemplate';
import AuthForm from '../components/Auth/AuthForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
