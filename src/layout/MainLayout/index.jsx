import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ProTypes from 'prop-types'

MainLayout.prototype = {
  children: ProTypes.oneOfType([
    ProTypes.element,
    ProTypes.arrayOf(ProTypes.element)
  ])
}

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
