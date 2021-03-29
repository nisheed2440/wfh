// The navigation state selectors to be used within components
import { createSelector } from "reselect";

export const getSelectedNavItem = (state) => state.navigation.selected || {};
export const getNavigationData = (state) => state.navigation.data;
export const getNavigationError = (state) => state.navigation.error
export const hasNavigationError = createSelector([getNavigationError], (error) => !!error);