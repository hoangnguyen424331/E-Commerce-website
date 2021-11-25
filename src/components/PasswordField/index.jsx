import React, { useState } from 'react'
import { ErrorMessage, useField } from 'formik'
import { TextField, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

function PassWordField(props) {
  const [field, meta] = useField(props)
  const { name } = field
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <>
      <TextField
        id={name}
        {...field}
        {...props}
        type={showPassword ? 'text' : 'password'}
        autoComplete="off"
        margin="normal"
        fullWidth
        size="medium"
        error={meta.touched && meta.error ? true : false}
        InputProps={{
          style: { fontSize: 14 },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <ErrorMessage component="div" name={name} className="error" />
    </>
  )
}

export default PassWordField
