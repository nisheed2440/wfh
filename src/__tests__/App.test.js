import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Root', () => {
	it('should render the layout', () => {
		render(<App />);
		const layoutElement = screen.getByTestId('layout-container');
		expect(layoutElement).toBeInTheDocument();
	});
});
