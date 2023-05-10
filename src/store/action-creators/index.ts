import * as RegistrationActionsCreators from './registration'
import * as AuthActionsCreators from './auth'
import * as UserActionCreators from './user'
import * as PostActionCreators from './post'

export default {
  ...RegistrationActionsCreators,
  ...AuthActionsCreators,
  ...UserActionCreators,
  ...PostActionCreators,
}
