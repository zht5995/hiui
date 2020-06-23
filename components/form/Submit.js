import React, { useContext } from 'react'

import { FormContext } from './Form'
import Button from '../button'

const Submit = props => {
  const { children = 'submit', onClick, validate } = props
  const { validate: formValidate } = useContext(FormContext)
  const submit = () => {
    onClick && formValidate(onClick, validate)
  }
  return (
    <Button {...props} onClick={submit}>
      {children}
    </Button>
  )
}
export default Submit
