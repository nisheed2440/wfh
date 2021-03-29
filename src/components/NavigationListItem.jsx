import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationListItemIcon from './NavigationListItemIcon';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isNavOpen } from '../store/selectors/settingsSelectors';
import { setSelected } from '../store/reducers/navigationReducer';
import { getSelectedNavItem } from '../store/selectors/navigationSelectors';

const NavItemType = PropTypes.shape({
	title: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string,
	icon: PropTypes.string,
	hasAlert: PropTypes.bool,
});

NavItemType.children = PropTypes.arrayOf(NavItemType);

export const NavItemPropType = NavItemType;

const NavigationListItem = ({ item, level, children, isMenu, root }) => {
	const { title, id, icon, hasAlert } = item;
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const hasChildren = item.children && item.children.length > 0;
	const navOpen = useSelector(isNavOpen);
	const history = useHistory();
	const dispatch = useDispatch();
	const match = useRouteMatch(`/${id}`);
	const selected = useSelector(getSelectedNavItem);

	useEffect(() => {
		if (match) {
			dispatch(setSelected(root));
		}
	});

	const handleSubMenuToggle = () => {
		setSubMenuOpen(!subMenuOpen);
	};
	
	return (
		<li id={id} data-testid={`navigation-list-item-${level}`}>
			<div className="w-full flex items-center px-5 relative">
				{level === 0 && selected.id === id && (
					<div className="w-1 h-wf-icon bg-wf-purple absolute left-0 rounded-tr rounded-br" />
				)}
				{!isMenu && (
					<NavigationListItemIcon
						icon={icon}
						level={level}
						hasAlert={hasAlert}
						isActive={!!match}
					/>
				)}
				{!hasChildren && (
					<button
						className={cx(
							'w-full flex py-4 items-center text-xs focus:outline-none overflow-hidden',
							{
								'text-wf-purple': !!match,
							}
						)}
						data-testid="navigation-link"
						onClick={() => {
							history.push(`/${id}`);
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
	root: NavItemPropType.isRequired,
};

NavigationListItem.defaultProps = {
	isMenu: false,
};

export default NavigationListItem;
