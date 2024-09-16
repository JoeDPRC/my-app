import { authAction } from '../../actions/Type/Type'
import { authType, initialAuthState } from '../Type/Type';


const auth = (state: authType = initialAuthState, action: authAction):authType => {
  switch(action.type) {
    case 'LOGGED_IN': 
      return {loggedIn: true}

    case 'LOGGED_OUT': 
      return {loggedIn: false}

    default:
      return state
  }
}

export default auth