import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { NAV_DATA_API } from '../../utils/constants';

/**
 * Thunk to fetch the navigation data
 * Note: https://redux-toolkit.js.org/api/createAsyncThunk
 */
export const getNavData = createAsyncThunk(
	'navigation/getNavData',
	async () => {
		const { data } = await axios.get(NAV_DATA_API);
		return data;
	}
);
