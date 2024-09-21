import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectContacts, selectError } from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/filters/operations';

function ContactList({ onDelete }) {
	// Получаем список контактов, ошибку и отфильтрованные контакты из Redux
	const contacts = useSelector(selectContacts);
	const error = useSelector(selectError);
	const filteredContacts = useSelector(selectFilteredContacts);

	// Проверка на пустой список контактов
	if (contacts.length === 0) {
		return <b>Contacts list is empty..</b>;
	}

	return (
		<div className={styles.contact_list}>
			{filteredContacts.map(contact => (
				<div key={contact.id} className={styles.contact_item}>
					{error === null && <Contact data={contact} onDelete={onDelete} />}
				</div>
			))}
		</div>
	);
}

export default ContactList;
