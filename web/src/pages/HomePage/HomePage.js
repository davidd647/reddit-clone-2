import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import BlogCommentsCell from 'src/components/BlogCommentsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>This is the homepage</p>
      <p>BlogPostsCell:</p>
      <BlogPostsCell />
      <p>BlogCommentsCell:</p>
      <BlogCommentsCell />
    </BlogLayout>
  )
}

export default HomePage
