import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer'; // Q. 중괄호로 감싸는 것과 감싸지 않는 것의 차이점?

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register, login

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

// handleActions: 리듀서를 작성하고 액션 처리에 도움을 주는 함수, ({액션 처리 함수 객체}, {초기 상태})
const auth = handleActions(
  {
    // [{액션 타입을 키로 가지고 있는 객체}]: ({리듀서가 관리하는 현재 상태}, {key로부터 value를 추출})
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // ex) state.register.username 변경
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
