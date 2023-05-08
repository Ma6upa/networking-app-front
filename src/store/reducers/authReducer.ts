import { AuthAction, AuthState, authActionTypes } from "../../types/auth"


const initialState: AuthState = {
  userData: {
    userId: null,
    token: null
  },
  loading: false,
  error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case authActionTypes.AUTH_REQUEST:
      return { loading: true, error: null, userData: {userId: null, token: null} }
    case authActionTypes.AUTH_REQUEST_SUCCESS:
      return { loading: false, error: null, userData: {userId: action.payload.userId, token: action.payload.token} }
    case authActionTypes.AUTH_REQUEST_ERROR:
      return { loading: false, error: action.payload, userData: {userId: null, token: null} }
    default:
      return state
  }
}
