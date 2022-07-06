import React from 'react'
import {
  EuiText,
  useEuiPaddingSize
} from '@elastic/eui'

import Container from '@app/shared-components/container'

function NotFound () {
  return (
    <Container
      narrow
      style={{
        paddingTop: useEuiPaddingSize('l')
      }}
    >
      <EuiText>404 Page Not Found</EuiText>
    </Container>
  )
}

export default NotFound
