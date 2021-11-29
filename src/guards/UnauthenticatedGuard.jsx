import React from 'react'
import ProTypes from 'prop-types'
import useAuth from 'src/hooks/useAuth'
import { path } from 'src/constants/path'
import { Redirect } from 'react-router-dom'

UnauthenticatedGuard.propTypes = {
  children: ProTypes.oneOfType([
    ProTypes.element,
    ProTypes.arrayOf(ProTypes.element)
  ])
}

function UnauthenticatedGuard({ children }) {
  const { authenticated } = useAuth()
  if (authenticated) {
    return <Redirect to={path.home} />
  }
  return <>{children}</>
}

export default UnauthenticatedGuard
