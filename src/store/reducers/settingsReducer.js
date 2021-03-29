import { createSlice } from '@reduxjs/toolkit';

// Mock data for menu when user is logged in
export const userMockLoggedInData = {
	label: 'Safavieh',
	menuItems: [
		{
			title: 'Account Settings',
			id: 'account-settings',
			url: '/u/account-settings',
		},
		{
			title: 'User Management',
			id: 'user-management',
			url: '/u/user-management',
		},
		{
			title: 'My Team',
			id: 'my-team',
			url: '/u/my-team',
		},
		{
			title: 'English(UK)',
			id: 'lang',
			children: [],
		},
		{
			title: 'Logout',
			id: 'logout',
			url: '/u/logout',
		},
	],
};

// Mock data for menu when user is logged out
export const userMockLoggedOutData = {
	menuItems: [
		{
			title: 'Login',
			id: 'login',
			url: '/u/login',
		},
	],
};

// Initial settings state
const initialState = {
	navOpen: false,
	user: userMockLoggedOutData,
	loggedIn: false,
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		// Toggle sidebar open close
		toggleNavOpen(state) {
			state.navOpen = !state.navOpen;
		},
		// Set user logged in
		login(state) {
			state.user = userMockLoggedInData;
			state.loggedIn = true;
		},
		// Logout the user by clearing all data
		logout(state) {
			state.user = userMockLoggedOutData;
			state.loggedIn = false;
		},
	},
});

export const { toggleNavOpen, login, logout } = settingsSlice.actions;
export default settingsSlice.reducer;
