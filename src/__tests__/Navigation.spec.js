import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
	it('should render default', () => {
		render(<Navigation />);
		expect(screen.getByTestId('navigation')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
	});
});
