import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URI
});

api.interceptors.request.use((config) => {
	const rawData = localStorage.getItem('@authenticationToken');

	if (!rawData) {
		return config;
	}

	const authData: AuthenticationResponse = JSON.parse(rawData as string);
	config.headers.authorization = authData.token;

	return config;
});

export default api;
