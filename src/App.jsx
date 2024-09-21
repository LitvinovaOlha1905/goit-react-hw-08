import './App.css';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { apiRefreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
	import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectAuthIsRefreshing);

	useEffect(() => {
		dispatch(apiRefreshUser());
	}, [dispatch]);

	if (isRefreshing) {
		return <b>User is refreshing, please wait...</b>;
	}
	return (
		<div>
			<Layout>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route
						path='/register'
						element={<RestrictedRoute component={<RegistrationPage />} />}
					/>
					<Route
						path='/login'
						element={<RestrictedRoute component={<LoginPage />} />}
					/>
					<Route
						path='/contacts'
						element={<PrivateRoute component={<ContactsPage />} />}
					/>
				</Routes>
			</Layout>
		</div>
	);
};

export default App;
