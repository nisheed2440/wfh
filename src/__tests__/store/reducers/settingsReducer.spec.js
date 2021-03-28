import store from '../../../store/index';
import {
	login,
    logout,
	toggleNavOpen,
    userMockLoggedOutData,
    userMockLoggedInData,
} from '../../../store/reducers/settingsReducer';
import {
	isNavOpen,
	getUserData,
	hasUserData,
} from '../../../store/selectors/settingsSelectors';

describe('settingsReducer', () => {
	it('should toggle nav open flag in store', () => {
		expect(isNavOpen(store.getState())).toEqual(false);
		store.dispatch(toggleNavOpen());
		expect(isNavOpen(store.getState())).toEqual(true);
	});

	it('should set user data', () => {
		expect(getUserData(store.getState())).toMatchObject(userMockLoggedOutData);
		store.dispatch(login());
		expect(getUserData(store.getState())).toMatchObject(userMockLoggedInData);
	});

    it('should unset user data', () => {
		expect(getUserData(store.getState())).toMatchObject(userMockLoggedInData);
		store.dispatch(logout());
		expect(getUserData(store.getState())).toMatchObject(userMockLoggedOutData);
	});
});
