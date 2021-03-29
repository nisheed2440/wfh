import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
						{/* Login route */}
						<Route path="/login">
							<Login />
						</Route>
						{/* Logout route */}
						<Route path="/logout">
							<Logout />
						</Route>
						{/* Catch all route handler */}
						<Route path="/">
							<Helmet>
								<title>Partner Home</title>
							</Helmet>
							<div />
						</Route>
					</Switch>
				</Layout>
			</Provider>
		</Router>
	);
}

export default App;
