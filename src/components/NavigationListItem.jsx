import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationListItemIcon from './NavigationListItemIcon';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { isNavOpen } from '../store/selectors/settingsSelectors';

const NavItemType = PropTypes.shape({
	title: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string,
	icon: PropTypes.string,
	hasAlert: PropTypes.bool,
});

NavItemType.children = PropTypes.arrayOf(NavItemType);

export const NavItemPropType = NavItemType;

const NavigationListItem = ({ item, level, children, isMenu }) => {
	const { title, id, icon, url, hasAlert } = item;
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const handleSubMenuToggle = () => {
		setSubMenuOpen(!subMenuOpen);
	};
	const hasChildren = item.children && item.children.length > 0;
	const navOpen = useSelector(isNavOpen);

	return (
		<li id={id} data-testid={`navigation-list-item-${level}`}>
			{!hasChildren && (
				<a
					href={url}
					className="w-full flex px-5 py-4 items-center text-xs"
					data-testid="navigation-link"
				>
					{!isMenu && (
						<NavigationListItemIcon
							icon={icon}
							level={level}
							hasAlert={hasAlert}
						/>
					)}
					<span className="truncate">{title}</span>
				</a>
			)}
			{hasChildren && (
				<>
					<button
						className="w-full flex px-5 py-4 items-center text-xs"
						onClick={handleSubMenuToggle}
						data-testid="navigation-button"
					>
						{!isMenu && (
							<NavigationListItemIcon
								icon={icon}
								level={level}
								hasAlert={hasAlert}
							/>
						)}
						<span className="truncate">{item.title}</span>
						<div className="flex-1" />
						{subMenuOpen && <FiChevronUp />}
						{!subMenuOpen && <FiChevronDown />}
					</button>
					<div
						data-testid="navigation-submenu"
						className={cx({
							hidden: !subMenuOpen || (!navOpen && !isMenu),
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
	isMenu: PropTypes.bool,
};

NavigationListItem.defaultProps = {
	isMenu: false,
};

export default NavigationListItem;
