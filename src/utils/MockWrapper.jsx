import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const MockWrapper = ({ children }) => {
	return (
		<MemoryRouter>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	);
};

export default MockWrapper;
