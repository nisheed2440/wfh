import PropTypes from 'prop-types';
import { getNavIcon } from '../utils/common';

const NavigationListItemIcon = ({ icon, hasAlert, isActive, level }) => {
	const NavIcon = getNavIcon(icon);
	if (level > 0) {
		return (
			<div
				data-testid="item-icon-spacer"
				className="w-wf-icon h-wf-icon flex flex-shrink-0 justify-end items-center mr-2.5"
			>
				{/* If active show indicator for menu items */}
				{isActive && (
					<div
						data-testid="active-dot"
						className="w-1 h-1 bg-wf-purple rounded"
					/>
				)}
			</div>
		);
	}
	// Show navigation item icon for level 0 items if it exists
	return (
		<div
			data-testid="item-icon"
			className="w-wf-icon h-wf-icon text-wf-icon relative mr-2.5"
		>
			<NavIcon />
			{hasAlert && (
				<div
					data-testid="alert-dot"
					className="w-2 h-2 absolute top-0 right-0 bg-wf-yellow rounded"
				/>
			)}
		</div>
	);
};

NavigationListItemIcon.propTypes = {
	icon: PropTypes.string,
	hasAlert: PropTypes.bool,
	isActive: PropTypes.bool,
	level: PropTypes.number,
};

NavigationListItemIcon.defaultProps = {
	icon: null,
	hasAlert: false,
	isActive: false,
	level: 0,
};

export default NavigationListItemIcon;
