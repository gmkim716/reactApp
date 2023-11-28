import axios from "axios";

// api들이 들어있는 파일을 분리

export async function getUsers() {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	return response.data;
}

export async function getUser(id) {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	return response.data;
}