import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IoMenuSharp } from 'react-icons/io5';

const Layout = ({ sidebar, header, children }) => {
	const [sidebarExpand, setSidebarExpand] = useState(false);
	return (
		<div
			className="w-full h-full flex flex-row"
			data-testid="layout-container"
		>
			<aside
				className={cx(
					'flex flex-col border-r border-wf-gray transition-all',
					{
						'w-14': !sidebarExpand,
						'w-80': sidebarExpand,
					}
				)}
				data-testid="sidebar-container"
			>
				<div className="h-16 flex flex-shrink-0 items-center px-4">
					<button
						aria-label={sidebarExpand ? 'menu-fold' : 'menu-unfold'}
						className="w-6 h-6 flex justify-center items-center text-lg"
						type="button"
						onClick={() => {
							setSidebarExpand(!sidebarExpand);
						}}
						data-testid="sidebar-toggle"
					>
						<IoMenuSharp />
					</button>
				</div>
				<div className="flex-1">
					<nav className="overflow-y" data-testid="sidebar">
						{sidebar}
					</nav>
				</div>
			</aside>
			<div
				className="flex flex-1 flex-col overflow-hidden"
				data-testid="main-container"
			>
				<header className="h-16 flex flex-shrink-0 items-center shadow border-b border-wf-gray px-5">
					<a href="/" title="Partner Home">
						<img
							className="h-6"
							src={`${process.env.PUBLIC_URL}/wayfair-partner-home-logo.svg`}
							alt="Partner Home"
						/>
					</a>
					<div className="flex-1" />
					<div
						className="flex items-center relative"
						data-testid="header"
					>
						{header}
					</div>
				</header>
				<main className="flex-1" data-testid="main">
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
