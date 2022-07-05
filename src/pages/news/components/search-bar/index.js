import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  EuiFieldText,
  EuiButtonIcon
} from '@elastic/eui'

import { setSearch } from '../../store'

function SearchBar (props) {
  const dispatch = useDispatch()
  const state = useSelector(({ pages }) => pages.news)

  const [searchText, setSearchText] = useState(state.search)

  const onClickSearch = useCallback(
    async () => {
      dispatch(setSearch(searchText))
    },
    [searchText]
  )

  return (
    <EuiFieldText
      fullWidth
      placeholder='Search ...'
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
      append={<EuiButtonIcon iconType='search' aria-label='Search News' onClick={onClickSearch} />}
    />
  )
}

export default SearchBar
