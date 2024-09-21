import styles from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
		<nav className={styles.navigation}>
			<NavLink
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.link_active)
				}
				to='/'
			>
				Home
			</NavLink>

			{isLoggedIn && (
				<NavLink
					className={({ isActive }) =>
						clsx(styles.link, isActive && styles.link_active)
					}
					to='/contacts'
				>
					Contacts
				</NavLink>
			)}
		</nav>
	);
};

export default Navigation;
