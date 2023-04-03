import { USER_AUTH_KEY } from "shared/const/localstorage"
import  axios  from "axios"


export const $api = axios.create({
	baseURL: __API__,
	headers: {
		authorization: localStorage.getItem(USER_AUTH_KEY) || ""
	}
})

$api.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.authorization = localStorage.getItem(USER_AUTH_KEY) || ""
	}
	return config
})