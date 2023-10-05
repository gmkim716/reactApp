import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

// useActions Hook: 액션 생성 함수 액션을 디스패치하는 함수로 변환
// useActions(액션 생성 함수로 이루어진 배열, deps 배열(원소가 바뀌면 액션을 디스패치))
export default function useActions(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    );
}