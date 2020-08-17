import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'
import BlogCommentsByParentIdCell from 'src/components/BlogCommentsByParentIdCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
      <BlogCommentsByParentIdCell parentPostId={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
