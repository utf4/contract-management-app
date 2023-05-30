import { combineReducers } from 'redux';
import contactReducer from './contact.reducer';

const rootReducer = combineReducers({
	usersList: contactReducer,
});

export default rootReducer;
