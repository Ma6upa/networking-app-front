import * as UserActionsCreators from './user'
import * as RegistrationActionsCreators from './registration'
import * as AuthActionsCreators from './auth'

export default {
  ...UserActionsCreators,
  ...RegistrationActionsCreators,
  ...AuthActionsCreators
}
