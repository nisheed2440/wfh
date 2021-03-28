import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationListItemIcon from './NavigationListItemIcon';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const NavItemType = PropTypes.shape({
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
	id: PropTypes.string.isRequired,
	icon: PropTypes.string,
	hasAlert: PropTypes.bool.isRequired,
});

NavItemType.children = PropTypes.arrayOf(PropTypes.shape(NavItemType));

export const NavItemPropType = NavItemType;

const NavigationListItem = ({ item, level, children }) => {
	const { title, id, icon, url, hasAlert } = item;
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const handleSubMenuToggle = () => {
		setSubMenuOpen(!subMenuOpen);
	};
	const hasChildren = item.children && item.children.length > 0;
	return (
		<li id={id} data-testid={`navigation-list-item-${level}`}>
			{!hasChildren && (
				<a
					href={url}
					className="w-full flex px-5 py-4 items-center text-sm"
					data-testid="navigation-link"
				>
					<NavigationListItemIcon
						icon={icon}
						level={level}
						hasAlert={hasAlert}
						isActive={true}
					/>
					<span className="truncate">{title}</span>
				</a>
			)}
			{hasChildren && (
				<>
					<button
						className="w-full flex px-5 py-4 items-center text-sm"
						onClick={handleSubMenuToggle}
						data-testid="navigation-button"
					>
						<NavigationListItemIcon
							icon={icon}
							level={level}
							hasAlert={hasAlert}
						/>
						<span className="truncate">{item.title}</span>
						<div className="flex-1" />
						{subMenuOpen && <FiChevronUp />}
						{!subMenuOpen && <FiChevronDown />}
					</button>
					<div
                        data-testid="navigation-submenu"
						className={cx({
							hidden: !subMenuOpen,
							block: subMenuOpen,
						})}
					>
						{children}
					</div>
				</>
			)}
		</li>
	);
};

NavigationListItem.propTypes = {
	item: NavItemPropType.isRequired,
	level: PropTypes.number.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default NavigationListItem;
