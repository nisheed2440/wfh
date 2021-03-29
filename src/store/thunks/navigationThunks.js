import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNavData = createAsyncThunk(
	'navigation/getNavData',
	async () => {
		const { data } = await axios.get(
			'https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms'
		);
		return data;
	}
);
