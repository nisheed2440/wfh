import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Layout from '../../components/Layout';
import store from '../../store';

describe('Layout Component', () => {
	it('should render without additional props', () => {
		render(
			<Provider store={store}>
				<Layout />
			</Provider>
		);
		const sidebarElement = screen.getByTestId('sidebar');
		const headerElement = screen.getByTestId('header');
		const mainElement = screen.getByTestId('main');
		expect(sidebarElement).toBeInTheDocument();
		expect(headerElement).toBeInTheDocument();
		expect(mainElement).toBeInTheDocument();
		expect(sidebarElement.innerHTML).toBeFalsy();
		expect(headerElement.innerHTML).toBeFalsy();
		expect(mainElement.innerHTML).toBeFalsy();
	});

	it('should render header when provided', () => {
		render(
			<Provider store={store}>
				<Layout header={<div>Test header</div>} />
			</Provider>
		);
		const headerElement = screen.getByTestId('header');
		expect(headerElement).toBeInTheDocument();
		expect(headerElement.textContent).toEqual('Test header');
	});

	it('should render sidebar when provided', () => {
		render(
			<Provider store={store}>
				<Layout sidebar={<div>Test sidebar</div>} />
			</Provider>
		);
		const sidebarElement = screen.getByTestId('sidebar');
		expect(sidebarElement).toBeInTheDocument();
		expect(sidebarElement.textContent).toEqual('Test sidebar');
	});

	it('should render children when provided', () => {
		render(
			<Provider store={store}>
				<Layout>
					<div>Test main</div>
				</Layout>
			</Provider>
		);
		const mainElement = screen.getByTestId('main');
		expect(mainElement).toBeInTheDocument();
		expect(mainElement.textContent).toEqual('Test main');
	});

	it('should toggle open sidebar', () => {
		render(
			<Provider store={store}>
				<Layout />
			</Provider>
		);
		const toggleElement = screen.getByTestId('sidebar-toggle');
		const sidebarContainerElement = screen.getByTestId('sidebar-container');
		expect(sidebarContainerElement.className).toContain('w-14');
		expect(toggleElement.getAttribute('aria-label')).toEqual('menu-unfold');

		fireEvent.click(toggleElement);
		expect(sidebarContainerElement.className).toContain('w-80');
		expect(toggleElement.getAttribute('aria-label')).toEqual('menu-fold');
	});
});
