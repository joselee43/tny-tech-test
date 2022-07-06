import React from 'react'
import {
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiText,
  useEuiTheme,
  EuiLink
} from '@elastic/eui'
import styled from 'styled-components'
import Container from '../container'

const EuiHeaderWrapper = styled.div`
  box-shadow: 0 0.7px 1.4px rgb(0 0 0 / 7%), 0 1.9px 4px rgb(0 0 0 / 5%), 0 4.5px 10px rgb(0 0 0 / 5%);
  background-color: ${props => props.bgColor || '#FFF'};
  border-bottom: 1px solid #cdd3df;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
`

const EuiHeader = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`

const EuiLogoLink = styled(EuiLink)`
  color: inherit !important;
  text-Decoration: unset !important;
`

export default () => {
  const theme = useEuiTheme()

  return (
    <EuiHeaderWrapper bgColor={theme.euiTheme.colors.custom.headerBg}>
      <EuiHeader>
        <EuiHeaderSectionItem border='right'>
          <EuiText><EuiLogoLink href='/'>TNY TECH TEST</EuiLogoLink></EuiText>
        </EuiHeaderSectionItem>

        <EuiHeaderSectionItem>
          <EuiHeaderLinks>
            <EuiHeaderLink>FEED</EuiHeaderLink>
            <EuiHeaderLink>AUTHORS</EuiHeaderLink>
            <EuiHeaderLink>EXPLORE</EuiHeaderLink>
            <EuiHeaderLink>BLOG</EuiHeaderLink>
            <EuiHeaderLink>CONTACT</EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeader>
    </EuiHeaderWrapper>
  )
}
