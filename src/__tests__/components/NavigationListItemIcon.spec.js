import { render, screen } from '@testing-library/react';
import NavigationListItemIcon from '../components/NavigationListItemIcon';

describe('NavigationListItemIcon Component', () => {
	it('should render default icon without alert dot', () => {
		render(<NavigationListItemIcon />);
		expect(screen.getByTestId('item-icon')).toBeInTheDocument();
	});

	it('should render default icon with alert dot', () => {
		render(
			<NavigationListItemIcon
				icon="test-icon"
				hasAlert={true}
				level={0}
			/>
		);
		expect(screen.getByTestId('alert-dot')).toBeInTheDocument();
	});

	it('should not render spacer for level > 0', () => {
		render(
			<NavigationListItemIcon
				icon="test-icon"
				hasAlert={true}
				level={1}
			/>
		);
		expect(screen.getByTestId('item-icon-spacer')).toBeInTheDocument();
	});

	it('should not render is active for level > 0', () => {
		render(<NavigationListItemIcon isActive={true} level={1} />);
		expect(screen.getByTestId('active-dot')).toBeInTheDocument();
	});
});
