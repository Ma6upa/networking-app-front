import { Dispatch } from "redux"
import axios from "axios"
import { UserAction, fetchUserActionTypes } from "../../types/user"

export const fetchUser = (id: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: fetchUserActionTypes.FETCH_USER })
      const response = await axios.get("/api/user/user", {
        params: {
          userId: id
        }
      })
      dispatch({ type: fetchUserActionTypes.FETCH_USER_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({
        type: fetchUserActionTypes.FETCH_USER_ERROR,
        payload: 'Произошла ошибка при загрузке данных пользователя'
      })
    }
  }
}
