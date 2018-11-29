import 'jest'
import * as React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '.'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})