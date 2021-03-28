import NavigationList, { NavDataPropType } from './NavigationList';

const Navigation = ({ data }) => {
	return (
		<nav data-testid="navigation" className="overflow-hidden">
			<NavigationList data={data} />
		</nav>
	);
};

Navigation.propTypes = {
	data: NavDataPropType,
};

Navigation.defaultProps = {
	data: [],
};

export default Navigation;
