import React, { Fragment, useState } from 'react'
import {
  EuiSpacer,
  useEuiPaddingSize
} from '@elastic/eui'
import SearchBar from './components/search-bar'

import ContentContainer from '../../shared-components/content-container'
import dummyData from '../../data.json'
import NewsCard from './components/card'

function News () {
  const [data/*, setData */] = useState(dummyData)

  return (
    <ContentContainer style={{
      paddingTop: useEuiPaddingSize('l')
    }}
    >
      <SearchBar />
      <EuiSpacer />
      {
        data.map((item, index) => (
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
