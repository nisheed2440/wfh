import axios from 'axios';
import store from '../../../store';
import { setSelected } from '../../../store/reducers/navigationReducer';
import {
	getSelectedNavItem,
	getNavigationData,
    getNavigationError,
	hasNavigationError,
} from '../../../store/selectors/navigationSelectors';
import { getNavData } from '../../../store/thunks/navigationThunks';

jest.mock('axios');

describe('navigationReducer', () => {
	it('should set selected nav item', () => {
		const mockData = {
			title: 'test',
			id: 'test',
			url: 'test',
		};
		expect(getSelectedNavItem(store.getState())).toBeNull();
		store.dispatch(setSelected(mockData));
		expect(getSelectedNavItem(store.getState())).toMatchObject(mockData);
	});

	it('should set data from endpoint', async () => {
		const mockData = [
			{
				title: 'test',
				id: 'test',
				url: 'test',
			},
		];
		axios.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: mockData,
			})
		);
		expect(getNavigationData(store.getState())).toEqual([]);
		await store.dispatch(getNavData());
		expect(getNavigationData(store.getState())).toMatchObject(mockData);
	});

	it('should set error from endpoint', async () => {
		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error('Test Error'))
		);
		await store.dispatch(getNavData());
		expect(getNavigationData(store.getState())).toEqual(null);
		expect(getNavigationError(store.getState())).not.toBeNull();
		expect(hasNavigationError(store.getState())).toEqual(true);
	});
});
