import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import HeaderActions from '../../components/HeaderActions';

describe('HeaderActions Component', () => {
	it('should render component with data', () => {
		render(
			<Provider store={store}>
				<HeaderActions />
			</Provider>
		);
		expect(screen.getByTestId('header-item-button')).toBeInTheDocument();
	});
});
