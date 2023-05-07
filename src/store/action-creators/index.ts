import * as UserActionsCreators from './user'
import * as RegistrationActionsCreators from './registration'

export default {
  ...UserActionsCreators,
  ...RegistrationActionsCreators
}
