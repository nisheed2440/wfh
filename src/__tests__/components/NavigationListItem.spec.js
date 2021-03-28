import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
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
		render(
			<Provider store={store}>
				<NavigationListItem item={mockData} level={0} />
			</Provider>
		);
		expect(screen.getByTestId('navigation-link')).toBeInTheDocument();
	});

	it('should render children as collapsible component', () => {
		const data = { ...mockData, children: [mockData] };
		render(
			<Provider store={store}>
				<NavigationListItem item={data} level={0}>
					<div data-testid="test-child" />
				</NavigationListItem>
			</Provider>
		);
		expect(screen.getByTestId('navigation-button')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-submenu').className).toContain(
			'hidden'
		);
	});

	it('should open collapsible sub menu component on click of navigation button', () => {
		const data = { ...mockData, children: [mockData] };
		render(
			<Provider store={store}>
				<NavigationListItem item={data} level={0}>
					<div data-testid="test-child" />
				</NavigationListItem>
			</Provider>
		);
		fireEvent.click(screen.getByTestId('navigation-button'));
		expect(screen.getByTestId('navigation-submenu').className).toContain(
			'block'
		);
	});
});
