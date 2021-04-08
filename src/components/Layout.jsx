import { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IoMenuSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { isNavOpen } from '../store/selectors/settingsSelectors';
import { toggleNavOpen } from '../store/reducers/settingsReducer';
import { setSelected } from '../store/reducers/navigationReducer';

const Layout = ({ sidebar, header, children }) => {
	const navOpen = useSelector(isNavOpen);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		// Reset the selected data on route change
		history.listen(() => {
			dispatch(setSelected(null));
		});
	});

	return (
		<div
			className="w-full h-full flex flex-row overflow-hidden"
			data-testid="layout-container"
		>
			<aside
				className={cx(
					'flex flex-col border-r border-wf-gray transition-all',
					{
						'w-14': !navOpen,
						'w-80': navOpen,
					}
				)}
				data-testid="sidebar-container"
			>
				<div className="h-16 flex flex-shrink-0 items-center px-5">
					<button
						aria-label={navOpen ? 'menu-fold' : 'menu-unfold'}
						className="w-wf-icon h-wf-icon text-wf-icon flex justify-center items-center"
						type="button"
						onClick={() => {
							// Update the store with the toggled state of the sidebar
							dispatch(toggleNavOpen());
						}}
						data-testid="sidebar-toggle"
					>
						<IoMenuSharp />
					</button>
				</div>
				<div className="flex-1 overflow-y-auto" data-testid="sidebar">
					{sidebar}
				</div>
			</aside>
			<div
				className="flex flex-1 flex-col overflow-hidden"
				data-testid="main-container"
			>
				<header className="h-16 flex flex-shrink-0 items-center shadow border-b border-wf-gray px-5">
					<Link to="/" title="Partner Home">
						<img
							className="h-6"
							src={`${process.env.PUBLIC_URL}/wayfair-partner-home-logo.svg`}
							alt="Partner Home"
						/>
					</Link>
					<div className="flex-1" />
					<div
						className="flex items-center relative"
						data-testid="header"
					>
						{header}
					</div>
				</header>
				<main className="flex-1 overflow-y-auto" data-testid="main">
					{children}
				</main>
			</div>
		</div>
	);
};

Layout.propTypes = {
	sidebar: PropTypes.node,
	header: PropTypes.node,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

Layout.defaultProps = {
	sidebar: null,
	header: null,
	children: null,
};

export default Layout;
