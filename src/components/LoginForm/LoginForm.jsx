import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const initValues = {
  email: "",
  password: "",
};

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Min 8 symbols")
    .max(30, "Max 50 symbols"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
  };

  return (
		<Formik
			initialValues={initValues}
			onSubmit={handleSubmit}
			validationSchema={LoginValidationSchema}
		>
			<Form className={styles.form}>
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
					Log In
				</button>
				{error && <p className={styles.error}>Some error: {error}</p>}
			</Form>
		</Formik>
	);
};

export default LoginForm;
