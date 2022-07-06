import React, { Fragment } from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiToast
} from '@elastic/eui'

import SearchBar from '../search-bar'
import NewsCard from '../card'
import CategoryBar from '../category-bar'

function News (props) {
  const { data, loading, error, category, onClickLoadMore } = props

  return (
    <>
      <CategoryBar active={category} />
      <EuiSpacer size='s' />
      <SearchBar />
      <EuiSpacer />
      {
        error &&
          <>
            <EuiToast
              title={error}
              color='danger'
              iconType='alert'
            />
            <EuiSpacer size='s' />
          </>
      }
      {
        (data || []).map((item, index) => (
          <Fragment key={index}>
            <NewsCard data={item} />
            <EuiSpacer />
          </Fragment>
        ))
      }
      {
        loading
          ? <NewsCard loading />
          : (
            <EuiFlexGroup justifyContent='spaceAround' responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiLink onClick={onClickLoadMore}>
                  Load more ...
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
            )
      }
    </>
  )
}

export default News
