import { createSlice } from '@reduxjs/toolkit';


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
			children: [
				{
					title: 'French(CA)',
					id: 'fr-CA',
				},
				{
					title: 'English(CA)',
					id: 'en-CA',
				},
				{
					title: 'English(UK)',
					id: 'en',
				},
			],
		},
        {
			title: 'Logout',
			id: 'logout',
			url: '/u/logout',
		},
	],
};

export const userMockLoggedOutData = {
	menuItems: [
        {
			title: 'Login',
			id: 'login',
			url: '/u/login',
		},
	],
};

const initialState = {
	navOpen: false,
	user: userMockLoggedOutData,
    loggedIn: false,
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		toggleNavOpen(state) {
			state.navOpen = !state.navOpen;
		},
		login(state) {
			state.user = userMockLoggedInData;
            state.loggedIn = true;
		},
        logout(state){
            state.user = userMockLoggedOutData;
            state.loggedIn = false;
        }
	},
});

export const { toggleNavOpen, login, logout } = settingsSlice.actions;
export default settingsSlice.reducer;
