import { render, screen, fireEvent } from '@testing-library/react';
import HeaderItem from '../../components/HeaderItem';
import MockWrapper from '../../utils/MockWrapper';
import { userMockLoggedOutData } from '../../store/reducers/settingsReducer';

describe('HeaderItem Component', () => {
	it('should render component with data', () => {
		render(
			<HeaderItem
				menuData={userMockLoggedOutData.menuItems}
				menuItem={<div data-testid="test-icon" />}
			/>,
			{ wrapper: MockWrapper }
		);
		expect(screen.getByTestId('header-item-button')).toBeInTheDocument();
	});
	it('should open the dropdown menu on click of item', () => {
		render(
			<HeaderItem
				menuData={userMockLoggedOutData.menuItems}
				menuItem={<div data-testid="test-icon" />}
			/>,
			{ wrapper: MockWrapper }
		);
		fireEvent.click(screen.getByTestId('header-item-button'));
		expect(screen.getByTestId('navigation-list-1')).toBeInTheDocument();
		expect(screen.getAllByTestId('navigation-list-item-1').length).toEqual(
			1
		);
	});
});
