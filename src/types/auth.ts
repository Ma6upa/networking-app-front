export enum authActionTypes {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS',
  AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR',
}

export interface AuthState {
  userData: {
    userId: string | null
    token: string | null
  };
  loading: boolean;
  error: null | string
}

interface AuthRequestAction {
  type: authActionTypes.AUTH_REQUEST
}

interface AuthRequestSuccessAction {
  type: authActionTypes.AUTH_REQUEST_SUCCESS
  payload: {
    userId: string | null
    token: string | null
  };
}

interface AuthRequestErrorAction {
  type: authActionTypes.AUTH_REQUEST_ERROR
  payload: string
}

export type AuthAction = AuthRequestAction | AuthRequestSuccessAction | AuthRequestErrorAction
