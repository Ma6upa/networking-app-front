export enum fetchUserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface UserState {
  user: {
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    avatarPath?: string | null;
    birthDate?: string | null;
    city?: string | null;
  }
  loading: boolean;
  error: string | null
}

interface FetchUserAction {
  type: fetchUserActionTypes.FETCH_USER
}

interface FetchUserSuccessAction {
  type: fetchUserActionTypes.FETCH_USER_SUCCESS
  payload: {
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    avatarPath?: string | null;
    birthDate?: string | null;
    city?: string | null;
  }
}

interface FetchUserErrorAction {
  type: fetchUserActionTypes.FETCH_USER_ERROR
  payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
