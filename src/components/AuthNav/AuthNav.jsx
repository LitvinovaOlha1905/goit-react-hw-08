
import styles from './AuthNav.module.css';
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const AuthNav = () => {
  return (
		<div className={styles.content}>
			<NavLink
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.link_active)
				}
				to='/register'
			>
				Register
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.link_active)
				}
				to='/login'
			>
				Log In
			</NavLink>
		</div>
	);
};
export default AuthNav;
