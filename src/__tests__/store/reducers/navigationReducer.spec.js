import axios from 'axios';
import store from '../../../store';
import { setSelected } from '../../../store/reducers/navigationReducer';
import {
	getSelectedNavItem,
	getNavigationData,
	getNavigationError,
	hasNavigationError,
	getSelectedNavData,
} from '../../../store/selectors/navigationSelectors';
import { getNavData } from '../../../store/thunks/navigationThunks';

jest.mock('axios');

describe('navigationReducer', () => {
	const mockSelected = {
		id: '1',
		children: [
			{
				id: '1.1',
				children: [
					{
						id: '1.1.1',
					},
				],
			},
		],
	};
	const mockNavigation = [
		{
			id: '1',
			children: [
				{
					id: '1.1',
					children: [
						{
							id: '1.1.1',
						},
					],
				},
			],
		},
		{
			id: '2',
			children: [
				{
					id: '2.1',
					children: [
						{
							id: '2.1.1',
						},
					],
				},
			],
		},
	];
	const mockSelectedNavigation = [
		{
			id: '1',
			selected: true,
			children: [
				{
					id: '1.1',
					selected: true,
					children: [
						{
							id: '1.1.1',
							selected: true,
						},
					],
				},
			],
		},
		{
			id: '2',
			children: [
				{
					id: '2.1',
					children: [
						{
							id: '2.1.1',
						},
					],
				},
			],
		},
	];

	it('should set selected nav item', () => {
		const mockData = {
			title: 'test',
			id: 'test',
			url: 'test',
		};
		expect(getSelectedNavItem(store.getState())).toMatchObject({});
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
		expect(getNavigationData(store.getState())).toEqual(null);
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

	it('should merge selected data with nav data', async () => {
		const output = getSelectedNavData('1.1.1')({
			navigation: {
				data: mockNavigation,
				selected: mockSelected,
			},
		});

		expect(output).toMatchObject(mockSelectedNavigation);
	});

	it('should return navigation data if id/selected does not exist', async () => {
		const output = getSelectedNavData(null)({
			navigation: {
				data: mockNavigation,
				selected: null,
			},
		});
		expect(output).toMatchObject(mockNavigation);
	});
});
