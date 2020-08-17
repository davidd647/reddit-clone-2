import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import HomepagePost from 'src/components/HomepagePost'

const HomePage = () => {
  return (
    <BlogLayout>
      <HomepagePost />

      <p className="pt-3">Posts:</p>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
