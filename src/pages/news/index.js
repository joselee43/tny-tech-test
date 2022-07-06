import React, { Fragment, useEffect, useState } from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiToast,
  useEuiPaddingSize
} from '@elastic/eui'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import SearchBar from './components/search-bar'
import NewsCard from './components/card'
import CategoryBar from './components/category-bar'
import ContentContainer from '@app/shared-components/content-container'
import { fetchData } from './store'
import { Categories } from '@app/utils/constant'

function News () {
  const dispatch = useDispatch()
  const state = useSelector(({ pages }) => pages.news)
  const params = useParams()
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    const { category } = params || {}
    if (category) {
      const match = Categories.find(item => item.value === category)
      if (!match) {
        navigate('/news')
      } else {
        setActiveCategory(category)
      }
    } else {
      setActiveCategory('')
    }
  }, [])

  useEffect(() => {
    if (activeCategory !== null) {
      dispatch(fetchData({
        reset: true,
        category: activeCategory
      }))
    }
  }, [state.search, activeCategory])

  const onClickLoadMore = () => {
    dispatch(fetchData({
      category: activeCategory
    }))
  }

  return (
    <ContentContainer style={{
      paddingTop: useEuiPaddingSize('l')
    }}
    >
      <CategoryBar active={activeCategory} />
      <EuiSpacer size='s' />
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
      {
        state.loading
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
    </ContentContainer>
  )
}

export default News
