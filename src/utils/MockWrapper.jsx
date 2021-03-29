import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

// Mock wrapper used for testing the application
const MockWrapper = ({ children }) => {
	return (
		<MemoryRouter>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	);
};

export default MockWrapper;
