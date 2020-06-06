import {
	createStore as reduxCreateStore,
	combineReducers,
} from 'redux';

import { userReducer } from '../users/reducers';

const createStore = () => {
	return reduxCreateStore(
		combineReducers({
			users: userReducer
		})
	)
}

export default createStore
