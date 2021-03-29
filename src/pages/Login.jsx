import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../store/reducers/settingsReducer';
import { isLoggedIn } from '../store/selectors/settingsSelectors';

const Login = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector(isLoggedIn);
	useEffect(() => {
		dispatch(login());
	});
	if (loggedIn) {
		// if user is logged in redirect to home page
		return <Redirect to="/" />;
	}
	// Show user some feedback about logging in
	return (
		<div data-testid="login-skeleton" className="w-full h-full flex items-center justify-center">
			Logging In...
		</div>
	);
};

export default Login;
