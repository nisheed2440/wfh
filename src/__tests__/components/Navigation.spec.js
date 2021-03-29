import { render, screen } from '@testing-library/react';
import Navigation from '../../components/Navigation';
import MockWrapper from '../../utils/MockWrapper';

describe('Navigation Component', () => {
	it('should render default', () => {
		render(<Navigation />, { wrapper: MockWrapper });
		expect(screen.getByTestId('navigation')).toBeInTheDocument();
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
	});
});
