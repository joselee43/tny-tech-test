import React, { useEffect, useState } from 'react'
import {
  useEuiPaddingSize
} from '@elastic/eui'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import Content from './components/page-content'
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
      <Content
        data={state.data}
        loading={state.loading}
        error={state.error}
        category={activeCategory}
        onClickLoadMore={onClickLoadMore}
      />
    </ContentContainer>
  )
}

export default News
