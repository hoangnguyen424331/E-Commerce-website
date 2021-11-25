import React from 'react'
import logo from 'src/assets/logo/logo-primary.svg'
import { path } from 'src/constants/path'
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './styles.scss'

function AuthHeader({ title }) {
  return (
    <header className="auth-header">
      <Container maxWidth="lg">
        <div className="auth-header__main">
          <div className="auth-header__left">
            <div className="auth-header__logo">
              <Link to={path.home}>
                <img
                  src={logo}
                  alt="Shoppe"
                  className="auth-header__logo-img"
                />
              </Link>
            </div>
            <div className="auth-header__title">{title}</div>
          </div>
          <div className="auth-header__right">
            <Link to="" className="auth-header__help">
              Cần trợ giúp?
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default AuthHeader
