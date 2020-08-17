import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import HomepagePost from 'src/components/HomepagePost'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>This is the homepage</p>

      <HomepagePost />

      <p className="pt-3">BlogPostsCell:</p>
      <BlogPostsCell />
      {/* <p>BlogCommentsCell:</p>
      <BlogCommentsCell /> */}
    </BlogLayout>
  )
}

export default HomePage
