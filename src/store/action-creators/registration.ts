import { Dispatch } from "redux"
import axios from "axios"
import { RegistrationAction, registrationActionTypes } from "../../types/registration"


export const registrationRequest = () => {
  return async (dispatch: Dispatch<RegistrationAction>) => {
    try {
      dispatch({ type: registrationActionTypes.REGISTRATION_REQUEST })
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      dispatch({ type: registrationActionTypes.REGISTRATION_REQUEST_SUCCESS, payload: response.data.message })
    } catch (e) {
      dispatch({
        type: registrationActionTypes.REGISTRATION_REQUEST_ERROR,
        payload: 'Произошла ошибка при регистрации'
      })
    }
  }
}
