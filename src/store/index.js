import { configureStore, combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './reducers/settingsReducer';
import navigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
	settings: settingsReducer,
	navigation: navigationReducer,
});

export default configureStore({
	reducer: rootReducer,
});
