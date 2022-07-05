import { combineReducers } from '@reduxjs/toolkit'
import NewsReducer from '@app/pages/news/store'

export default combineReducers({
  news: NewsReducer
})
