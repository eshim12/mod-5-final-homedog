import React from 'react'
import Mailto from 'react-mailto'

const Email = () => {
  return(
    <Mailto email="ellishim@gmail.com" obfuscate={true}>
        Email me!
      </Mailto>
  )
}

export default Email
