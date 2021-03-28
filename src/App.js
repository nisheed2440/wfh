import { Provider } from 'react-redux';
import Layout from './components/Layout';
import data from './navigation.json';
import Navigation from './components/Navigation';
import './App.css';
import store from './store';
import HeaderActions from './components/HeaderActions';

function App() {
	return (
		<Provider store={store}>
			<Layout header={<HeaderActions />} sidebar={<Navigation data={data} />}>
				<p>
					Sint excepteur eiusmod id exercitation reprehenderit
					occaecat consectetur Lorem dolore. Anim veniam eu ipsum duis
					eiusmod et in ipsum id aliquip qui. Amet velit tempor sint
					amet dolor minim voluptate elit officia. Dolore tempor
					deserunt reprehenderit voluptate laboris esse non culpa
					duis.
				</p>
			</Layout>
		</Provider>
	);
}

export default App;
