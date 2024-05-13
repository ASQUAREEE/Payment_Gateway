import { combineReducers } from 'redux';
import user from './user';
import assignTaskPackage from './assignTaskPackage';


const rootReducer = combineReducers({
	assignTaskPackage,
	user
});

export default rootReducer;
