import PropTypes from 'prop-types';
import NavigationListItem, { NavItemPropType } from './NavigationListItem';

const NavigationList = ({ data, level, isMenu, root }) => {
	return (
		<ul data-testid={`navigation-list-${level}`}>
			{data
				.filter((item) => !!item.title)
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
