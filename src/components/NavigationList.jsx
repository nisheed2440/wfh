import PropTypes from 'prop-types';
import NavigationListItem , { NavItemPropType } from './NavigationListItem';

const NavigationList = ({ data, level, isMenu }) => {
	return (
		<ul data-testid={`navigation-list-${level}`}>
			{data
				.filter((item) => !!item.title)
				.map((item) => (
					<NavigationListItem key={item.id} item={item} level={level} isMenu={isMenu}>
                        <NavigationList data={item.children} level={level + 1} isMenu={isMenu}/>
                    </NavigationListItem>
				))}
		</ul>
	);
};

export const NavDataPropType = PropTypes.arrayOf(NavItemPropType);

NavigationList.propTypes = {
	data: NavDataPropType,
	level: PropTypes.number,
    isMenu: PropTypes.bool,
};

NavigationList.defaultProps = {
	data: [],
	level: 0,
    isMenu: false,
};

export default NavigationList;
