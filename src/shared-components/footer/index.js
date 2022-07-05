import React from 'react'
import {
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  useEuiPaddingSize,
  useEuiTheme
} from '@elastic/eui'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Container from '../container'

const EuiFooterWrapper = styled(EuiBottomBar)`
  background-color: ${props => props.bgColor} !important;
`

const EuiFooter = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const FooterItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FooterItemsTitle = styled(EuiText)`
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const EuiFooterItem = (props) => {
  const { title, lines } = props

  return (
    <EuiPanel paddingSize='m' hasShadow={false} color='transparent'>
      <FooterItemsTitle size='xs'>{title}</FooterItemsTitle>
      <EuiSpacer size='m' />
      {
        lines.map((line, index) => (
          <EuiText key={index}>{line}</EuiText>
        ))
      }
    </EuiPanel>
  )
}

const SocialLinkSection = styled.div`
  margin-top: 16px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`

const FooterItems = [{
  title: 'FOOTER ITEM 1',
  lines: [
    'Eros qualisque nam id, integre',
    'salutandi vix'
  ]
}, {
  title: 'FOOTER ITEM 2',
  lines: [
    '497 Evergreen Rd. Roseville, CA 95673',
    '+44 345 678 903'
  ]
}, {
  title: 'FOOTER ITEM 3',
  lines: [
    'Alii errem docendi et ius, ut',
    'dicant eripuit'
  ]
}]

export default () => {
  const theme = useEuiTheme()

  return (
    <EuiFooterWrapper color='primary' position='static' bgColor={theme.euiTheme.colors.custom.footerBg}>
      <EuiFooter>
        <FooterItemsWrapper>
          {
            FooterItems.map((item, index) => (
              <EuiFooterItem key={index} {...item} />
            ))
          }
        </FooterItemsWrapper>
        <SocialLinkSection>
          <EuiFlexGroup justifyContent='center' responsive={false}>
            <EuiFlexItem grow={false}>
              <FontAwesomeIcon icon={faInstagram} />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <FontAwesomeIcon icon={faTwitter} />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <FontAwesomeIcon icon={faFacebookF} />
            </EuiFlexItem>
          </EuiFlexGroup>
        </SocialLinkSection>
      </EuiFooter>
    </EuiFooterWrapper>
  )
}
