import { render, screen, fireEvent } from '@testing-library/react';
import MockWrapper from '../../utils/MockWrapper';
import NavigationListItem from '../../components/NavigationListItem';

describe('NavigationListItem Component', () => {
	const mockData = {
		title: 'Help & Support',
		url: null,
		id: 'help-and-support',
		icon: 'helpAndSupport',
		hasAlert: false,
		children: [],
	};

	it('should render default', () => {
		render(<NavigationListItem item={mockData} level={0} />, {
			wrapper: MockWrapper,
		});
		expect(screen.getByTestId('navigation-link')).toBeInTheDocument();
	});

	it('should render children as collapsible component', () => {
		const data = { ...mockData, children: [mockData] };
		render(
			<NavigationListItem item={data} level={0}>
				<div data-testid="test-child" />
			</NavigationListItem>,
			{ wrapper: MockWrapper }
		);
		expect(screen.getByTestId('navigation-button')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-submenu').className).toContain(
			'hidden'
		);
	});

	it('should open collapsible sub menu component on click of navigation button', () => {
		const data = { ...mockData, children: [mockData] };
		render(
			<NavigationListItem item={data} level={0}>
				<div data-testid="test-child" />
			</NavigationListItem>,
			{ wrapper: MockWrapper }
		);
		fireEvent.click(screen.getByTestId('navigation-button'));
		expect(screen.getByTestId('navigation-submenu').className).toContain(
			'block'
		);
	});
});
