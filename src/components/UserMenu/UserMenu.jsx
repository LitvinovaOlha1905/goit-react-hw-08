import styles from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/selectors';
import { apiLogout } from '../../redux/auth/operations';

const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectAuthUser);

	const onLogout = () => {
		dispatch(apiLogout());
	};

	return (
		<div className={styles.user_menu}>
			<p>
				Welcome, <span className={styles.descr}>{user.name}</span>
			</p>
			<button type='button' onClick={onLogout}>
				Logout
			</button>
		</div>
	);
};
export default UserMenu;
