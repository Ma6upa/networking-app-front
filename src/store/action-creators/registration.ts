import { Dispatch } from "redux"
import axios from "axios"
import { RegistrationAction, registrationActionTypes } from "../../types/registration"

interface UserData {
  email: string | null,
  password: string | null
  firstName: string | null,
  lastName: string | null,
  birthDate: string | null,
  city: string | null,
  university: string | null,
  avatar: FormDataEntryValue | null
}

export const registrationRequest = (userData: UserData) => {
  return async (dispatch: Dispatch<RegistrationAction>) => {
    try {
      dispatch({ type: registrationActionTypes.REGISTRATION_REQUEST })
      if (userData.avatar) {
        let formData = new FormData()
        formData.append('avatar', userData.avatar)
        await axios.post(process.env.REACT_APP_API_URL + "/api/auth/upload", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
      }
      const response = await axios.post(process.env.REACT_APP_API_URL + "/api/auth/register", {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthDate: userData.birthDate,
        city: userData.city,
        university: userData.university,
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
