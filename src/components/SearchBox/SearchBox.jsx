import React from 'react';
import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { selectLoading } from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader'


function SearchBox() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);

	const filterValue = useSelector(selectFilter);

	const handleFilter = event => {
		const value = event.target.value;
		const action = setFilterValue(value);
		dispatch(action);
	};

	return (
		<div className={styles.content}>
			<p>Find contacts by name</p>
			<label>
				<input
					type='text'
					name='searchBox'
					onChange={handleFilter}
					value={filterValue}
				/>
			</label>
			{isLoading && <Loader />}
		</div>
	);
}

export default SearchBox;
