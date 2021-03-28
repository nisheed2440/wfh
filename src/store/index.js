import { configureStore, combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
});

export default configureStore({
    reducer: rootReducer,
});