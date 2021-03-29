import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../store/reducers/settingsReducer';
import { isLoggedIn } from '../store/selectors/settingsSelectors';

const Logout = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector(isLoggedIn);
	useEffect(() => {
		dispatch(logout());
	});
	if (loggedIn) {
		return <Redirect to="/" />;
	}
	return (
		<div className="w-full h-full flex items-center justify-center">
			Logging Out...
		</div>
	);
};

export default Logout;
