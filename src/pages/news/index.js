import React from 'react'
import { Link } from 'react-router-dom'

function News () {
  return (
    <div>
      <h3>News Listing from https://newsapi.org</h3>
      <Link to='/news/soccer'>
        Soccer
      </Link>
    </div>
  )
}

export default News
