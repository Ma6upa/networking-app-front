import { UserAction, UserState, fetchUserActionTypes } from "../../types/user"

const initialState: UserState = {
  user: {
    id: '',
    email: '',
    firstName: null,
    lastName: null,
    avatarPath: null,
    birthDate: null,
    city: null,
    university: null,
  },
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case fetchUserActionTypes.FETCH_USER:
      return {
        loading: true, error: null,
        user: {
          id: '',
          email: '',
          firstName: null,
          lastName: null,
          avatarPath: null,
          birthDate: null,
          city: null,
          university: null,
        },
      }
    case fetchUserActionTypes.FETCH_USER_SUCCESS:
      return {
        loading: false, error: null,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          avatarPath: action.payload.avatarPath,
          birthDate: action.payload.birthDate,
          city: action.payload.city,
          university: action.payload.university,
        },
      }
    case fetchUserActionTypes.FETCH_USER_ERROR:
      return {
        loading: false, error: action.payload,
        user: {
          id: '',
          email: '',
          firstName: null,
          lastName: null,
          avatarPath: null,
          birthDate: null,
          city: null,
        },
      }
    default:
      return state
  }
}
