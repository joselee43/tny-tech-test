import { shallow } from 'enzyme'
import { EuiToast } from '@elastic/eui'

import News from '@app/pages/news/components/page-content'
import NewsCard from '@app/pages/news/components/card'

it('renders without crashing', () => {
  shallow(<News />)
})

it('renders loading skeleton', () => {
  const wrapper = shallow(<News loading={true} />)
  const loadingCard = wrapper.find(NewsCard)
  expect(loadingCard).toHaveLength(1)
  expect(loadingCard.at(0).prop('loading')).toBeTruthy()
})

it('renders error toast', () => {
  const wrapper = shallow(<News error='blabla' />)
  const errorToast = wrapper.find(EuiToast)
  expect(errorToast).toHaveLength(1)
})

it('renders correct number of data', () => {
  const data = [{}, {}, {}]
  const wrapper = shallow(<News data={data} />)
  const errorToast = wrapper.find(NewsCard)
  expect(errorToast).toHaveLength(data.length)
})

