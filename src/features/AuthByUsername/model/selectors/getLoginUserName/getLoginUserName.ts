import { StateSchema } from "app/providers/StoreProvider"

export const getLoginUserName = (state: StateSchema) => state?.login?.username || ""