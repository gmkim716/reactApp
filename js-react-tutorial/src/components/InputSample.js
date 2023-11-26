import React, { useEffect, useRef, useState } from "react";

function InputSample () {

	/* 데이터 정의 */
	const [ inputs, setInputs ] = useState({
		name: '',
		nickname: '',
	})
	const nameInput = useRef();  // nameInput 명칭으로 특정 DOM을 관리
	const { name, nickname } = inputs;

	/* 입력 데이터 기록 */
	const onChange = (e) => {
		const { value, name } = e.target;  // 비구조화 할당으로 값 추출
		setInputs({
			...inputs,  
			[name]: value,  
		})
	}

	/* 데이터 초기화 */
	const onReset = () => {
		setInputs({
			name: '',
			nickname: '',
		})
		// reset 이후 nameInput으로 커서 이동 
		nameInput.current.focus();
	}

	/* 데이터 확인 */

	return (
		<div>
			<input 
				name="name" 
				placeholder="이름" 
				onChange={onChange}
				value={name}
				ref={nameInput}  // nameInput으로 선언한 useRef 객체 연결
			/>
			<input 
				name="nickname"
				placeholder="닉네임" 
				onChange={onChange}
				value={nickname}	
			/>
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값 : </b> 
				이름 (닉네임)
			</div>
		</div>
	);
}

export default InputSample