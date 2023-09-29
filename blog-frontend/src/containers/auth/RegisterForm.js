import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/Auth/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));

  // input 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  // form 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    // 구현 예정
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화
  // 로그인 페이지에서 값을 입력하고 다른 페이지로 이동했다가 돌아왔을 때, 값이 유지된 상태로 보이게 되는 것을 방지
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
