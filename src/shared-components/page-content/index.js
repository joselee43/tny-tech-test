import React from 'react'
import styled from 'styled-components'

const PageContent = styled.div`
  padding-top: 50px;

  @media (max-width: 576px) {
    padding-top: 40px;
  }
`

export default ({ children }) => {
  return (
    <PageContent>
      {children}
    </PageContent>
  )
}
