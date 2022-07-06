import React from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiPanel
} from '@elastic/eui'
import { Categories } from '@app/utils/constant'

function CategoryBar ({ active }) {
  return (
    <EuiPanel color='transparent' paddingSize='xs'>
      <EuiFlexGroup justifyContent='flexStart' wrap responsive={false}>
        {
          [
            {
              title: 'All',
              value: ''
            },
            ...Categories
          ].map(({ title, value }) => (
            <EuiFlexItem key={value} grow={false}>
              <EuiLink color={active === value ? 'accent' : 'primary'} href={`/news/${value}`}>
                {title}
              </EuiLink>
            </EuiFlexItem>
          ))
        }
      </EuiFlexGroup>
    </EuiPanel>
  )
}

export default CategoryBar
