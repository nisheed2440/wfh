import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationList, { NavDataPropType } from './NavigationList';

export const HeaderItem = ({ menuData, menuItem }) => {
	const [menuShown, setMenuShown] = useState(false);
	const menuButtonRef = useRef(null);
	
	/**
	 * Function callback for when the document is clicked
	 * @param {MouseEvent} event The mouse event
	 */
	const handleDocumentClick = (event) => {
		if (menuButtonRef && !menuButtonRef.current.contains(event.target)) {
			setMenuShown(false);
		}
	};

	useEffect(() => {
		// Close the menu when clicked anywhere else on the document
		document.addEventListener('mousedown', handleDocumentClick);
		// Clean up
		return () => {
			document.removeEventListener('mousedown', handleDocumentClick);
		};
	});

	return (
		<div className="relative" ref={menuButtonRef}>
			<button
				data-testid="header-item-button"
				className={cx('flex items-center text-wf-icon', {
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
					className="w-wf-menu absolute bg-white mt-2 top-full right-0 shadow-md border border-grey-100 rounded z-20"
				>
					{/* Reused navigation list which starts at level 1 */}
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
