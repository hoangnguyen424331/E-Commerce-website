import React from 'react'
import AuthSection from '../AuthSection'
import { path } from 'src/constants/path'
import { Link } from 'react-router-dom'
import '../AuthSection/styles.scss'
import InputField from 'src/components/InputField'
import PasswordField from 'src/components/PasswordField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

function Login(props) {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email là trường bắt buộc')
      .email('Email này không hợp lệ')
      .min(6, 'Email có độ dài từ 6 - 160 kí tự')
      .max(160, 'Email có độ dài từ 6 - 160 kí tự'),
    password: Yup.string()
      .required('Mật khẩu là trường bắt buộc')
      .min(6, 'Email có độ dài từ 6 - 160 kí tự')
      .max(160, 'Email có độ dài từ 6 - 160 kí tự')
  })

  return (
    <div>
      <AuthSection>
        <div className="auth-form">
          <div className="auth-form__title">Đăng nhập</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {formik => (
              <Form className="auth-form__main">
                <InputField name="email" type="email" placeholder="Email" />
                <PasswordField
                  name="password"
                  type="password"
                  placeholder="Nhập vào mật khẩu"
                />
                <div className="auth-form__button">
                  <button className="button auth-form__button" type="submit">
                    Đăng nhập
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="auth-form__footer">
            <span>Bạn mới biết đến Shoppe</span>
            <Link to={path.register} className="auth-form__link">
              Đăng ký
            </Link>
          </div>
        </div>
      </AuthSection>
    </div>
  )
}

export default Login
