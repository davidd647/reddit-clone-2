import BlogPost from 'src/components/BlogPost'
import BlogCommentsByParentIdCell from 'src/components/BlogCommentsByParentIdCell'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      upvotes
      downvotes
      createdAt
      createdBy
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => {
    return (
      <div key={post.id}>
        <BlogPost post={post} />
        <BlogCommentsByParentIdCell parentPostId={post.id} />
      </div>
    )
  })
}
