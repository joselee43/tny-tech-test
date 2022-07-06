import {shallow} from 'enzyme'
import {
  EuiLink
} from '@elastic/eui'

import CategoryBar from '@app/pages/news/components/category-bar'
import { Categories } from '@app/utils/constant'

it('renders without crashing', () => {
  shallow(<CategoryBar />)
})

it('renders all category links', () => {
  const wrapper = shallow(<CategoryBar active='' />)
  expect(wrapper.find(EuiLink)).toHaveLength(Categories.length + 1)
})

it('renders only one active category', () => {
  const wrapper = shallow(<CategoryBar active='' />)
  const activeLink = wrapper.findWhere(n => n.name() === 'EuiLink' && n.prop('color') === 'accent')
  expect(activeLink).toHaveLength(1)
  expect(activeLink.at(0).prop('href')).toBe('/news/')
})