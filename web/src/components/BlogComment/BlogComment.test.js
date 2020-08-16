import { render } from '@redwoodjs/testing'

import BlogComment from './BlogComment'

describe('BlogComment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogComment />)
    }).not.toThrow()
  })
})
