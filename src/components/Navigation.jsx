import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNavigationData } from '../store/selectors/navigationSelectors';
import { getNavData } from '../store/thunks/navigationThunks';
import NavigationList from './NavigationList';

const Navigation = () => {
	const dispatch = useDispatch();
	const data = useSelector(getNavigationData);
	useEffect(() => {
		if (!data) {
			// Fetch data from API if not nav data is available in store
			dispatch(getNavData());
		}
	});
	if(data) {
		// Show navigation list when nav data is available
		return (
			<nav data-testid="navigation" className="overflow-hidden">
				<NavigationList data={data} />
			</nav>
		);
	}
	// Show loading skeleton when nav data is unavailable
	return (
		<div data-testid="navigation-skeleton" className="animate-pulse">
			{Array.from(Array(10).keys()).map((i) => (
				<div className="px-5 py-4 flex" key={i}>
					<div className="w-wf-icon h-wf-icon bg-gray-300 rounded mr-2.5 flex-shrink-0" />
					<div className="flex-1 h-wf-icon bg-gray-300 rounded" />
				</div>
			))}
		</div>
	);
};

export default Navigation;
