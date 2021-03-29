import { render, screen } from '@testing-library/react';
import MockWrapper from '../../utils/MockWrapper';
import NavigationList from '../../components/NavigationList';

describe('NavigationList Component', () => {
	it('should render default', () => {
		render(<NavigationList />, { wrapper: MockWrapper });
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
	});

	it('should render level 0', () => {
		const mockData = [
			{
				title: 'Help & Support',
				url: null,
				id: 'help-and-support',
				icon: 'helpAndSupport',
				hasAlert: false,
				children: [],
			},
			{
				title: 'Download Center',
				url: '/v/supplier/download_center/management/app',
				id: 'download-center',
				icon: 'downloadCenter',
				hasAlert: false,
				children: [],
			},
		];
		render(<NavigationList data={mockData} />, { wrapper: MockWrapper });
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
		expect(screen.getAllByTestId('navigation-list-item-0').length).toEqual(
			2
		);
	});

	it('should render level 1', () => {
		const mockData = [
			{
				title: 'Help & Support',
				url: null,
				id: 'help-and-support',
				icon: 'helpAndSupport',
				hasAlert: false,
				children: [
					{
						title: 'Download Center',
						url: '/v/supplier/download_center/management/app',
						id: 'download-center',
						icon: 'downloadCenter',
						hasAlert: false,
						children: [],
					},
				],
			},
		];
		render(<NavigationList data={mockData} />, { wrapper: MockWrapper });
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-list-1')).toBeInTheDocument();
		expect(
			screen.getByTestId('navigation-list-item-0')
		).toBeInTheDocument();
		expect(
			screen.getByTestId('navigation-list-item-1')
		).toBeInTheDocument();
	});
});
