import React from 'react'
import {
  EuiFieldText,
  EuiButtonIcon
} from '@elastic/eui'

function SearchBar (props) {
  return (
    <EuiFieldText
      fullWidth
      placeholder='Search ...'
      append={<EuiButtonIcon iconType='search' aria-label='Search News' />}
    />
  )
}

export default SearchBar
