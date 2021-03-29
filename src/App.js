import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import HeaderActions from './components/HeaderActions';
import './App.css';
import store from './store';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Layout header={<HeaderActions />} sidebar={<Navigation />}>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/logout">
							<Logout />
						</Route>
						<Route path="/">
							<div />
						</Route>
					</Switch>
				</Layout>
			</Provider>
		</Router>
	);
}

export default App;
