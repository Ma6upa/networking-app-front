import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { registrationReducer } from "./registrationReducer"
import { userReducer } from "./userReducer"


export const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
