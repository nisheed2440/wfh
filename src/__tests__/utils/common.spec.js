import { getNavIcon, setNodeTreeSelected } from '../../utils/common';
import { FaRegSmile } from 'react-icons/fa';

describe('getNavIcon', () => {
	it('should return default smile icon', () => {
		expect(getNavIcon()).toEqual(FaRegSmile);
	});
	it('should return specific icon', () => {
		expect(getNavIcon('products')).not.toEqual(FaRegSmile);
	});
});

describe('setNodeTreeSelected', () => {
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
	it('should set the entire tree selected for a given child id', () => {
		const mockSelectedCopy = { ...mockSelected };
		setNodeTreeSelected('1.1.1', mockSelectedCopy, [mockSelectedCopy]);
		expect(mockSelectedCopy).toMatchObject(mockSelectedNavigation[0]);
	});

	it('should not do anything for bad data', () => {
		expect(() => setNodeTreeSelected(undefined, null, null)).not.toThrow();
	});
});
