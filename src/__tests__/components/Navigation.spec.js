import { render, screen } from '@testing-library/react';
import Navigation from '../../components/Navigation';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Navigation Component', () => {
	it('should render default', () => {
		render(
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
		expect(screen.getByTestId('navigation')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
	});
});
