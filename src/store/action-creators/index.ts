import * as RegistrationActionsCreators from './registration'
import * as AuthActionsCreators from './auth'
import * as UserActionCreators from './user'

export default {
  ...RegistrationActionsCreators,
  ...AuthActionsCreators,
  ...UserActionCreators,
}
