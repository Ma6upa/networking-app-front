export enum registrationActionTypes {
  REGISTRATION_REQUEST = 'REGISTRATION_REQUEST',
  REGISTRATION_REQUEST_SUCCESS = 'REGISTRATION_REQUEST_SUCCESS',
  REGISTRATION_REQUEST_ERROR = 'REGISTRATION_REQUEST_ERROR',
}

export interface RegistrationState {
  message: string;
  loading: boolean;
  error: null | string
}

interface RegistrationRequestAction {
  type: registrationActionTypes.REGISTRATION_REQUEST
}

interface registrationRequestSuccessAction {
  type: registrationActionTypes.REGISTRATION_REQUEST_SUCCESS
  payload: string
}

interface registrationRequestErrorAction {
  type: registrationActionTypes.REGISTRATION_REQUEST_ERROR
  payload: string
}

export type RegistrationAction = RegistrationRequestAction | registrationRequestSuccessAction | registrationRequestErrorAction
