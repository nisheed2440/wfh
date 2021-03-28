import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import HeaderItem from '../../components/HeaderItem';
import { userMockLoggedOutData } from '../../store/reducers/settingsReducer';

describe('HeaderItem Component', () => {
	it('should render component with data', () => {
		render(
			<Provider store={store}>
				<HeaderItem
					menuData={userMockLoggedOutData.menuItems}
					menuItem={<div data-testid="test-icon" />}
				/>
			</Provider>
		);
		expect(screen.getByTestId('header-item-button')).toBeInTheDocument();
	});
	it('should open the dropdown menu on click of item', () => {
		render(
			<Provider store={store}>
				<HeaderItem
					menuData={userMockLoggedOutData.menuItems}
					menuItem={<div data-testid="test-icon" />}
				/>
			</Provider>
		);
		fireEvent.click(screen.getByTestId('header-item-button'));
		expect(screen.getByTestId('navigation-list-1')).toBeInTheDocument();
		expect(screen.getAllByTestId('navigation-list-item-1').length).toEqual(
			1
		);
	});
});
