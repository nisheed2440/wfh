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

/**
 * Function to set the nodes and its parents as selected
 * @param {string} id The id of the selected item
 * @param {Object} node The navigation node
 * @param {Array} parents The navigation parent nodes
 * @returns 
 */
export const setNodeTreeSelected = (id, node, parents = []) => {
	if (node && node.id === id) {
		node.selected = true;
		parents.forEach((item) => {
            item.selected = true
        });
	}
	if (node && node.children && Array.isArray(node.children)) {
		node.children.forEach((item) => {
			setNodeTreeSelected(id, item, [...parents, item]);
		});
	}
	return node;
};
