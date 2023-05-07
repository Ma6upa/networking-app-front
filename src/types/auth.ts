export enum authActionTypes {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS',
  AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR',
}

export interface AuthState {
  message: string;
  loading: boolean;
  error: null | string
}

interface AuthRequestAction {
  type: authActionTypes.AUTH_REQUEST
}

interface AuthRequestSuccessAction {
  type: authActionTypes.AUTH_REQUEST_SUCCESS
  payload: string
}

interface AuthRequestErrorAction {
  type: authActionTypes.AUTH_REQUEST_ERROR
  payload: string
}

export type AuthAction = AuthRequestAction | AuthRequestSuccessAction | AuthRequestErrorAction
