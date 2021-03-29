import { FaRegSmile } from 'react-icons/fa';
import { NAV_ICONS } from './constants';

/**
 * Function to return the nav icons for level one nav items
 * @param {string} icon The icon to be found
 * @returns The icon component
 */
 export const getNavIcon = (icon) => {
	const navIcon = NAV_ICONS[icon];
	if (navIcon) {
		return navIcon;
	}
	return FaRegSmile;
};
