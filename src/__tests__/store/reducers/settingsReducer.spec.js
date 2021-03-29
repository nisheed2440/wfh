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
    isLoggedIn,
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
        expect(isLoggedIn(store.getState())).toBeTruthy();
	});

    it('should unset user data', () => {
		expect(getUserData(store.getState())).toMatchObject(userMockLoggedInData);
		store.dispatch(logout());
		expect(getUserData(store.getState())).toMatchObject(userMockLoggedOutData);
        expect(isLoggedIn(store.getState())).toBeFalsy();
	});
});
