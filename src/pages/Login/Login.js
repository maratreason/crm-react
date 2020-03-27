import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { withFormik } from "formik"
import * as Yup from "yup"

class Login extends Component {
  render() {
    const { handleSubmit, errors, values, handleChange } = this.props

    return (
      <form className="card auth-card" onSubmit={handleSubmit}>
        <div className="card-content">
          <span className="card-title">Домашняя бухгалтерия</span>
          <div className="input-field">
            <input
              id="email"
              type="text"
              name="email"
              className="validate"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <small className="helper-text invalid">{errors.email}</small>
          </div>
          <div className="input-field">
            <input
              id="password"
              type="password"
              name="password"
              className="validate"
              value={values.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Пароль</label>
            <small className="helper-text invalid">{errors.password}</small>
          </div>
        </div>
        <div className="card-action">
          <div>
            <button
              className="btn waves-effect waves-light auth-submit"
              type="submit"
            >
              Войти
              <i className="material-icons right">send</i>
            </button>
          </div>

          <p className="center">
            Нет аккаунта?
            <NavLink to="/registration">Зарегистрироваться</NavLink>
          </p>
        </div>
      </form>
    )
  }
}

const FormikLogin = withFormik({
  mapPropsToValues: () => {
    return {
      email: "test@test.ru",
      password: "123456",
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "password must have 6 characters"),
    agree: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
  }),

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    // console.log("props", props)
    console.log(values.email, values.password)
    resetForm()
    setSubmitting(false)
    props.history.push("/")
  },
})(Login)

export default FormikLogin
