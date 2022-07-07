import React from 'react'
import {
  EuiCard,
  EuiImage,
  EuiLoadingContent,
  EuiSpacer,
  EuiText,
  useEuiPaddingSize
} from '@elastic/eui'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const EuiCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const SummarySection = styled.div`
  position: relative;
  flex-grow: 1;
`

const SummarySectionContent = styled.div`
  padding: ${props => props.padding};

  @media (min-width: 769px) {
    position: absolute;
    top: ${props => props.padding};
    right: ${props => props.padding};
    bottom: ${props => props.padding};
    left: ${props => props.padding};
    overflow: hidden;
    padding: 0;
  }
`

const EuiTextExt = styled(EuiText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.maxlines || 2};
  -webkit-box-orient: vertical;
`

const EuiImageWrapper = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const EuiLoadingContentWrapper = styled.div`
  padding: ${props => props.padding};
`

function NewsCard (props) {
  const { data, loading } = props

  return (
    <EuiCard layout='horizontal' title='' paddingSize='none'>
      {
        loading
          ? (
            <EuiLoadingContentWrapper padding={useEuiPaddingSize('m')}>
              <EuiLoadingContent lines={5} />
            </EuiLoadingContentWrapper>
            )
          : (
            <EuiCardContent>
              <SummarySection>
                <SummarySectionContent padding={useEuiPaddingSize('m')}>
                  <EuiTextExt size='xs' color='subdued'>
                    {data.title}
                  </EuiTextExt>
                  <EuiSpacer size='s' />
                  <EuiTextExt size='m' maxlines={2} style={{ fontWeight: 'bold' }}>
                    {data.description}
                  </EuiTextExt>
                  <EuiSpacer size='s' />
                  <EuiTextExt size='xs' maxlines={3}>
                    {data.content}
                  </EuiTextExt>
                </SummarySectionContent>
              </SummarySection>
              <EuiImageWrapper>
                <LazyLoad height={150} once>
                  <EuiImage
                    size='fullWidth'
                    alt='News image'
                    src={data.urlToImage}
                  />
                </LazyLoad>
              </EuiImageWrapper>
            </EuiCardContent>
            )
      }
    </EuiCard>
  )
}

export default NewsCard
