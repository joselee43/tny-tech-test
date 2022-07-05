import React, { Fragment, useEffect } from 'react'
import {
  EuiSpacer,
  EuiToast,
  useEuiPaddingSize
} from '@elastic/eui'
import { useDispatch, useSelector } from 'react-redux'

import SearchBar from './components/search-bar'
import ContentContainer from '../../shared-components/content-container'
import NewsCard from './components/card'
import { fetchData } from './store'

function News () {
  const dispatch = useDispatch()
  const state = useSelector(({ pages }) => pages.news)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <ContentContainer style={{
      paddingTop: useEuiPaddingSize('l')
    }}
    >
      <SearchBar />
      <EuiSpacer />
      {
        state.error &&
          <>
            <EuiToast
              title={state.error}
              color='danger'
              iconType='alert'
            />
            <EuiSpacer size='s' />
          </>
      }
      {
        state.data.map((item, index) => (
          <Fragment key={index}>
            <NewsCard data={item} />
            <EuiSpacer />
          </Fragment>
        ))
      }
    </ContentContainer>
  )
}

export default News
