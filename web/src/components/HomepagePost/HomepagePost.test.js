import { render } from '@redwoodjs/testing'

import HomepagePost from './HomepagePost'

describe('HomepagePost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepagePost />)
    }).not.toThrow()
  })
})
