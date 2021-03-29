import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationListItemIcon from './NavigationListItemIcon';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useHistory, useLocation, matchPath } from 'react-router-dom';
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
	const history = useHistory();
	const location = useLocation();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const matched = matchPath(location.pathname + location.hash, {
			path: item.url,
		});
		if (matched) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [isActive, item, location]);

	return (
		<li
			id={id}
			data-testid={`navigation-list-item-${level}`}
		>
			<div className="w-full flex items-center px-5">
				{!isMenu && (
					<NavigationListItemIcon
						icon={icon}
						level={level}
						hasAlert={hasAlert}
						isActive={isActive}
					/>
				)}
				{!hasChildren && (
					<button
						className={cx(
							'w-full flex py-4 items-center text-xs focus:outline-none overflow-hidden',
							{
								'text-wf-purple': isActive,
							}
						)}
						data-testid="navigation-link"
						onClick={() => {
							history.push(url);
						}}
					>
						<span className="truncate">{title}</span>
					</button>
				)}
				{hasChildren && (
					<button
						className="w-full flex py-4 items-center text-xs focus:outline-none overflow-hidden"
						onClick={handleSubMenuToggle}
						data-testid="navigation-button"
					>
						<span className="truncate">{item.title}</span>
						<div className="flex-1" />
						{subMenuOpen && <FiChevronUp />}
						{!subMenuOpen && <FiChevronDown />}
					</button>
				)}
			</div>
			{hasChildren && (
				<div
					data-testid="navigation-submenu"
					className={cx({
						hidden: !subMenuOpen || (!navOpen && !isMenu),
						block: subMenuOpen,
					})}
				>
					{children}
				</div>
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
