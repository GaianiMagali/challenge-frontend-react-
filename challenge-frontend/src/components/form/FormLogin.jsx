import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedActions } from '../../store/login/actions';
import { useHistory } from 'react-router';


export const FormLogin = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userLogged } = useSelector(state => state);


    console.log(userLogged);
    useEffect(() => {
        userLogged.logged && history.push('/app/home');
    }, [userLogged])


    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={(inputsValues) => {
                let errors = {};

                if (!inputsValues.email) {
                    errors.email = "Please enter a email"
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputsValues.email)) {
                    errors.email = "Invalid email address"
                }

                if (!inputsValues.password) {
                    errors.password = "Please enter a password"
                } else if (!/^[a-zA-Z0-9!@#$%^&*]{5,16}$/.test(inputsValues.password)) {
                    errors.password = "Please enter a valid password"
                }
                return errors;
            }}
            onSubmit={(inputsValues, { setSubmitting, resetForm }) => {
                dispatch(userLoggedActions.login(inputsValues["email"], inputsValues["password"]))
                // resetForm();
            }}
        >
            {({ errors, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="emailValid" className="form-label">Email</label>
                        <Field
                            id="emailValid"
                            type="text"
                            className="form-control "
                            name="email"
                            placeholder="email@gmail.com"
                        />
                        <ErrorMessage name="email" component={
                            () => (<div style={{ color: "#e92b2d" }}>{errors.email}</div>)
                        } />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field
                            id="password"
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage name="password" component={
                            () => (<div style={{ color: "#e92b2d" }}>{errors.password}</div>)
                        } />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
