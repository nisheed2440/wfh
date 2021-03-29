import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getUserData } from '../store/selectors/settingsSelectors';
import HeaderItem from './HeaderItem';

const HeaderActions = () => {
	const userData = useSelector(getUserData);
	return (
		<HeaderItem
			menuItem={
				<>
					{userData.label && (
						<span className="text-xs mr-2.5">{userData.label}</span>
					)}
					<FaRegUserCircle />
				</>
			}
			menuData={userData.menuItems}
		/>
	);
};

export default HeaderActions;
