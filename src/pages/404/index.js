import React from 'react'
import {
  EuiText,
  useEuiPaddingSize
} from '@elastic/eui'

import ContentContainer from '../../shared-components/content-container'

function NotFound () {
  return (
    <ContentContainer style={{
      paddingTop: useEuiPaddingSize('l')
    }}
    >
      <EuiText>404 Page Not Found</EuiText>
    </ContentContainer>
  )
}

export default NotFound
