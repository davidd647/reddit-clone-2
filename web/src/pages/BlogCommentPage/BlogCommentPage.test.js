import { render } from '@redwoodjs/testing'

import BlogCommentPage from './BlogCommentPage'

describe('BlogCommentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogCommentPage />)
    }).not.toThrow()
  })
})
