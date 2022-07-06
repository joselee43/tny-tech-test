import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import News from '@app/pages/news'
import NotFound from '@app/pages/404'

function AppRoutes () {
  return (
    <Routes>
      <Route exact path='/news'>
        <Route path=':category' element={<News />} />
        <Route path='' element={<News />} />
      </Route>
      <Route exact path='/' element={<Navigate to='/news' />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
