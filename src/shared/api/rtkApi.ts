import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { USER_AUTH_KEY } from "../const/localstorage"

export const rtkApi = createApi({
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem(USER_AUTH_KEY) || ""
			if (token) {
				headers.set("authorization", token)
			}
			return headers
		}
	}),
	endpoints: (builder) => ({}),
})