import React from 'react'
import Footer from '../Footer'
import AuthHeader from '../AuthHeader'

function AuthLayout({ children, title }) {
  return (
    <div>
      <AuthHeader title={title} />
      {children}
      <Footer />
    </div>
  )
}

export default AuthLayout
