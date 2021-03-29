import { act, render, screen} from '@testing-library/react';
import axios from 'axios';
import Navigation from '../../components/Navigation';
import MockWrapper from '../../utils/MockWrapper';

jest.mock('axios');

describe('Navigation Component', () => {
	
	it('should render default', () => {
		render(<Navigation />, { wrapper: MockWrapper });
		expect(screen.getByTestId('navigation-skeleton')).toBeInTheDocument();
	});

	it('should render navigation if data is present', async () => {
		const mockData = [
			{
				title: 'test',
				id: 'test',
				url: 'test',
			},
		];
		axios.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: mockData,
			})
		);
		await act(async () => {
			render(<Navigation />, { wrapper: MockWrapper });
		})
		expect(screen.getByTestId('navigation-list-0')).toBeInTheDocument();
	});
});
