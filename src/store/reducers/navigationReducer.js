import { createSlice } from '@reduxjs/toolkit';
import { getNavData } from '../thunks/navigationThunks';

const initialState = {
	data: null,
	selected: null,
	error: null,
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setSelected(state, action) {
			state.selected = action.payload;
		},
	},
	extraReducers: {
		[getNavData.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.error = null;
		},
		[getNavData.rejected]: (state, action) => {
			state.data = null;
			state.error = 'Navigation data fetch error';
		},
	},
});

export const { setSelected } = navigationSlice.actions;
export default navigationSlice.reducer;
