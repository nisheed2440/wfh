import PropTypes from 'prop-types';
import NavigationListItem, { NavItemPropType } from './NavigationListItem';

const NavigationList = ({ data, level, isMenu, root }) => {
	return (
		<ul data-testid={`navigation-list-${level}`} role="menu">
			{data
				// Filter out items that do not have a title
				.filter((item) => !!item.title)
				// Iterate through the items and recursively create the navigation list
				// Increment the level for each sub navigation list
				.map((item) => {
					const parent = root || item;
					return (
						<NavigationListItem
							key={item.id}
							item={item}
							level={level}
							isMenu={isMenu}
							root={parent}
						>
							<NavigationList
								data={item.children}
								level={level + 1}
								isMenu={isMenu}
								root={parent}
							/>
						</NavigationListItem>
					);
				})}
		</ul>
	);
};

export const NavDataPropType = PropTypes.arrayOf(NavItemPropType);

NavigationList.propTypes = {
	data: NavDataPropType,
	level: PropTypes.number,
	isMenu: PropTypes.bool,
	root: NavItemPropType,
};

NavigationList.defaultProps = {
	data: [],
	level: 0,
	isMenu: false,
	root: null,
};

export default NavigationList;
