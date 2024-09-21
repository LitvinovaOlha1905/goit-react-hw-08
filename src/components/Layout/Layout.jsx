import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
		<div className={styles.content}>
			<AppBar />
			<Suspense fallback={null}>{children}</Suspense>
		</div>
	);
};
