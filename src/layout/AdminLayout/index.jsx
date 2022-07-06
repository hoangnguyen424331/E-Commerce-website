import React from 'react'
import Footer from '../Footer'
import PropTypes from 'prop-types'

AdminLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function AdminLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default AdminLayout
