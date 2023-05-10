import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { registrationReducer } from "./registrationReducer"
import { userReducer } from "./userReducer"
import { postReducer } from "./postReducer"


export const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  user: userReducer,
  post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>
