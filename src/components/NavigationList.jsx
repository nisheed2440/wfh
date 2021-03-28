import PropTypes from 'prop-types';
import NavigationListItem , { NavItemPropType } from './NavigationListItem';

const NavigationList = ({ data, level }) => {
	return (
		<ul data-testid={`navigation-list-${level}`}>
			{data
				.filter((item) => !!item.title)
				.map((item) => (
					<NavigationListItem key={item.id} item={item} level={level}>
                        <NavigationList data={item.children} level={level + 1}/>
                    </NavigationListItem>
				))}
		</ul>
	);
};

export const NavDataPropType = PropTypes.arrayOf(PropTypes.shape(NavItemPropType));

NavigationList.propTypes = {
	data: NavDataPropType,
	level: PropTypes.number,
};

NavigationList.defaultProps = {
	data: [],
	level: 0,
};

export default NavigationList;
