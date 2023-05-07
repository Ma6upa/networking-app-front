import { Dispatch } from "redux"
import axios from "axios"
import { RegistrationAction, registrationActionTypes } from "../../types/registration"

interface UserData {
  email: string | null,
  password: string | null
}


export const registrationRequest = (userData: UserData) => {
  return async (dispatch: Dispatch<RegistrationAction>) => {
    try {
      dispatch({ type: registrationActionTypes.REGISTRATION_REQUEST })
      const response = await axios.post("/api/auth/register", {
        email: userData.email,
        password: userData.password
      })
      dispatch({ type: registrationActionTypes.REGISTRATION_REQUEST_SUCCESS, payload: response.data.message })
    } catch (e) {
      dispatch({
        type: registrationActionTypes.REGISTRATION_REQUEST_ERROR,
        payload: 'Произошла ошибка при регистрации'
      })
    }
  }
}
