
import styles from './RegistrationForm.module.css';
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const initValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Min 2 symbols")
    .max(30, "Max 50 symbols"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Min 8 symbols")
    .max(30, "Max 50 symbols"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
		<Formik
			initialValues={initValues}
			onSubmit={handleSubmit}
			validationSchema={RegisterValidationSchema}
		>
			<Form className={styles.form}>
				<label className={styles.form_label}>
					<span className={styles.form_descr}>Name</span>
					<Field className={styles.form_data} type='text' name='name' />
					<ErrorMessage className={styles.error} name='name' component='span' />
				</label>
				<label className={styles.form_label}>
					<span className={styles.form_descr}>Email</span>
					<Field className={styles.form_data} type='text' name='email' />
					<ErrorMessage
						className={styles.error}
						name='email'
						component='span'
					/>
				</label>
				<label className={styles.form_label}>
					<span className={styles.form_descr}>Password</span>
					<Field className={styles.form_data} type='password' name='password' />
					<ErrorMessage
						className={styles.errorMessage}
						name='password'
						component='span'
					/>
				</label>
				<button type='submit' className={styles.form_btn}>
					Sign up
				</button>
				{error && <p className={styles.error}>Some error: {error}</p>}
			</Form>
		</Formik>
	);
};

export default RegistrationForm;
