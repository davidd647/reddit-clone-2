// import { Link } from '@redwoodjs/router'
import BlogCommentCell from 'src/components/BlogCommentCell'
import BlogLayout from 'src/layouts/BlogLayout'

const BlogCommentPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogCommentCell id={id} />
    </BlogLayout>
  )
}

export default BlogCommentPage
