import { combineReducers } from '@reduxjs/toolkit'
import config from './config'
import pages from './pages'

export default combineReducers({
  config,
  pages
})
