import React from 'react'
import ProTypes from 'prop-types'
import { path } from 'src/constants/path'
import { Redirect } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

AuthenticatedGuard.propTypes = {
  children: ProTypes.oneOfType([
    ProTypes.element,
    ProTypes.arrayOf(ProTypes.element)
  ])
}

function AuthenticatedGuard({ children }) {
  const { authenticated } = useAuth()
  if (!authenticated) {
    return <Redirect to={path.login} />
  }
  return <>{children}</>
}

export default AuthenticatedGuard
