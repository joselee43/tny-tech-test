import React from 'react'
import { Routes, Route } from 'react-router-dom'
import News from '../pages/news'
import NewsDetail from '../pages/news-detail'

function AppRoutes () {
  return (
    <Routes>
      <Route exact path='/' element={<News />} />
      <Route exact path='/news/:id' element={<NewsDetail />} />
    </Routes>
  )
}

export default AppRoutes
