import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationList, { NavDataPropType } from './NavigationList';

export const HeaderItem = ({ menuData, menuItem }) => {
	const [menuShown, setMenuShown] = useState(false);
	const menuButtonRef = useRef(null);
	const handleDocumentClick = (event) => {
		if (menuButtonRef && !menuButtonRef.current.contains(event.target)) {
			setMenuShown(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleDocumentClick);
		return () => {
			document.removeEventListener('mousedown', handleDocumentClick);
		};
	});

	return (
		<div className="relative" ref={menuButtonRef}>
			<button
				data-testid="header-item-button"
				className={cx('w-wf-icon h-wf-icon text-wf-icon', {
					'text-wf-purple': menuShown,
				})}
				onClick={() => {
					setMenuShown(!menuShown);
				}}
			>
				{menuItem}
			</button>
			{menuShown && (
				<div
					data-testid="header-item-dropdown"
					className="w-wf-menu absolute bg-white top-full right-0 shadow-md z-20"
				>
					<NavigationList data={menuData} level={1} isMenu={true} />
				</div>
			)}
		</div>
	);
};

HeaderItem.propTypes = {
    menuItem: PropTypes.node.isRequired,
    menuData: NavDataPropType.isRequired,
}

export default HeaderItem;
