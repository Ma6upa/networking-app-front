import { Dispatch } from "redux"
import axios from "axios"
import { AuthAction, authActionTypes } from "../../types/auth"

interface UserData {
  email: string | null,
  password: string | null
}

export const authRequest = (userData: UserData) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authActionTypes.AUTH_REQUEST })
      const response = await axios.post("/api/auth/login", {
        email: userData.email,
        password: userData.password
      })
      dispatch({ type: authActionTypes.AUTH_REQUEST_SUCCESS, payload: response.data.message })
    } catch (e) {
      dispatch({
        type: authActionTypes.AUTH_REQUEST_ERROR,
        payload: 'Произошла ошибка при входе'
      })
    }
  }
}
