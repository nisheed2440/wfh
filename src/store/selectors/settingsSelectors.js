import { createSelector } from "reselect";

export const isNavOpen = (state) => state.settings.navOpen;
export const getUserData = (state) => state.settings.user;
export const hasUserData = createSelector([getUserData], (user) =>!!user);