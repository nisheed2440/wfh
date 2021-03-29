import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../store/reducers/settingsReducer';
import { isLoggedIn } from '../store/selectors/settingsSelectors';

const Logout = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector(isLoggedIn);
	useEffect(() => {
		// Update the store by clearing the user data
		dispatch(logout());
	});
	if (!loggedIn) {
		// if user is not logged in redirect to home page
		return <Redirect to="/" />;
	}
	// Show user some feedback about logging out
	return (
		<div data-testid="logout-skeleton" className="w-full h-full flex items-center justify-center">
			Logging Out...
		</div>
	);
};

export default Logout;
