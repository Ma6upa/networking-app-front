import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import { authReducer } from "./authReducer"
import { registrationReducer } from "./registrationReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  registration: registrationReducer
})

export type RootState = ReturnType<typeof rootReducer>
