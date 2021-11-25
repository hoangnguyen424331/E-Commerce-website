import React from 'react'
import './styles.scss'
import { Container, Grid } from '@material-ui/core'

function AuthSection({ children }) {
  return (
    <div className="auth">
      <Container maxWidth="lg">
        <Grid container spacing={2} className="auth__wrapper">
          <Grid item xs={12} md={7}>
            <div className="auth__banner" />
          </Grid>
          <Grid item xs={12} md={5}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AuthSection
