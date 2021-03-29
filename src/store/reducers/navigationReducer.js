import { createSlice } from '@reduxjs/toolkit';
import { getNavData } from '../thunks/navigationThunks';

// Initial navigation state
const initialState = {
	data: null,
	selected: null,
	error: null,
};

/**
 * Navigation slice to be used with the root store
 * Note: https://redux-toolkit.js.org/api/createSlice
 */
const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		// Set the level 0 navigation item for a given menu item
		setSelected(state, action) {
			state.selected = action.payload;
		},
	},
	extraReducers: {
		// Set navigation data
		[getNavData.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.error = null;
		},
		// Set error data
		[getNavData.rejected]: (state, action) => {
			state.data = null;
			state.error = 'Navigation data fetch error';
		},
	},
});

export const { setSelected } = navigationSlice.actions;
export default navigationSlice.reducer;
