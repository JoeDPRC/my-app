import { createStore } from 'redux'
import auth from './reducers/auth/AuthReducer'

const store = createStore(auth)