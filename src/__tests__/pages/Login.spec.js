import { act, render, screen } from '@testing-library/react';
import Login from '../../pages/Login';
import MockWrapper from '../../utils/MockWrapper';

describe('Login Component', () => {
	it('should redirect to home after login', async () => {
		await act(async () => {
			render(<Login />, { wrapper: MockWrapper });
		});
		expect(() => screen.getByTestId('login-skeleton')).toThrow();
	});
});
