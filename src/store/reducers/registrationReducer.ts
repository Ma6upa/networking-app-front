import { RegistrationAction, RegistrationState, registrationActionTypes } from "../../types/registration"

const initialState: RegistrationState = {
  message: '',
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: RegistrationAction): RegistrationState => {
  switch (action.type) {
    case registrationActionTypes.REGISTRATION_REQUEST:
      return { loading: true, error: null, message: '' }
    case registrationActionTypes.REGISTRATION_REQUEST_SUCCESS:
      return { loading: false, error: null, message: action.payload }
    case registrationActionTypes.REGISTRATION_REQUEST_ERROR:
      return { loading: false, error: action.payload, message: '' }
    default:
      return state
  }
}
