import { act, render, screen } from '@testing-library/react';
import Logout from '../../pages/Logout';
import MockWrapper from '../../utils/MockWrapper';
import store from '../../store';
import { login } from '../../store/reducers/settingsReducer';

describe('Logout Component', () => {
	it('should redirect to home after logout', async () => {
		await store.dispatch(login());
		await act(async () => {
			render(<Logout />, { wrapper: MockWrapper });
		});
		expect(() => screen.getByTestId('logout-skeleton')).toThrow();
	});
});
