import AuthTemplate from '../components/Auth/AuthTemplate';
import AuthForm from '../components/Auth/AuthForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
