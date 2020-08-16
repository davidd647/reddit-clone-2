import { render } from '@redwoodjs/testing'

import BlogComponent from './BlogComponent'

describe('BlogComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogComponent />)
    }).not.toThrow()
  })
})
