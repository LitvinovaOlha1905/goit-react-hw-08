import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  
  return (
		<header className={styles.header}>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
};
export default AppBar;
