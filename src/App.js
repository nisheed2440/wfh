import Layout from './components/Layout';
import data from './navigation.json';
import Navigation from './components/Navigation';
import './App.css';

function App() {
	return (
		<Layout header={<div />} sidebar={<Navigation data={data}/>}>
			<p>
				Sint excepteur eiusmod id exercitation reprehenderit occaecat
				consectetur Lorem dolore. Anim veniam eu ipsum duis eiusmod et
				in ipsum id aliquip qui. Amet velit tempor sint amet dolor minim
				voluptate elit officia. Dolore tempor deserunt reprehenderit
				voluptate laboris esse non culpa duis.
			</p>
		</Layout>
	);
}

export default App;
