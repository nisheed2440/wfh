// The navigation state selectors to be used within components
import { createSelector } from 'reselect';
import { setNodeTreeSelected } from '../../utils/common';

export const getSelectedNavItem = (state) => state.navigation.selected || {};
export const getNavigationData = (state) => state.navigation.data;
export const getNavigationError = (state) => state.navigation.error;
export const hasNavigationError = createSelector(
	[getNavigationError],
	(error) => !!error
);

export const getSelectedNavData = (id) =>
	createSelector(
		[getSelectedNavItem, getNavigationData],
		(selected, data) => {
			if (data && Array.isArray(data)) {
				// To be safe from reference changes create clone
				const selectedCopy = JSON.parse(JSON.stringify(selected));
				const dataCopy = JSON.parse(JSON.stringify(data));
				setNodeTreeSelected(id, selectedCopy, [selectedCopy]);
				// Find the index of the selected item in the nav  data
				const selectedIndex = dataCopy.findIndex(
					(item) => item.id === selectedCopy.id
				);
				if (selectedIndex > -1) {
					dataCopy.splice(selectedIndex, 1, selectedCopy);
				}
				return dataCopy;
			}
			return null;
		}
	);
