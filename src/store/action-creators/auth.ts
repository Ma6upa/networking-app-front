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
      const response = await axios.post(process.env.REACT_APP_API_URL + "/api/auth/login", {
        email: userData.email,
        password: userData.password
      })
      document.cookie = `token=${response.data.token}; expires=${new Date(2024, 0, 1)}`
      dispatch({ type: authActionTypes.AUTH_REQUEST_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({
        type: authActionTypes.AUTH_REQUEST_ERROR,
        payload: 'Произошла ошибка при входе'
      })
    }
  }
}
