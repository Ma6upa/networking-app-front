import { AuthAction, AuthState, authActionTypes } from "../../types/auth"


const initialState: AuthState = {
  message: '',
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case authActionTypes.AUTH_REQUEST:
      return { loading: true, error: null, message: '' }
    case authActionTypes.AUTH_REQUEST_SUCCESS:
      return { loading: false, error: null, message: action.payload }
    case authActionTypes.AUTH_REQUEST_ERROR:
      return { loading: false, error: action.payload, message: '' }
    default:
      return state
  }
}
