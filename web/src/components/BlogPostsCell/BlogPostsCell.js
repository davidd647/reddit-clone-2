import BlogPost from 'src/components/BlogPost'
import BlogCommentsByParentIdCell from 'src/components/BlogCommentsByParentIdCell'
import { getTime, parseISO } from 'date-fns'

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
  // organize posts by most to least recent
  posts.sort((a, b) => {
    return getTime(parseISO(b.createdAt)) - getTime(parseISO(a.createdAt))
  })

  // organize posts by most to least votes
  posts.sort((a, b) => {
    return b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  })

  return posts.map((post) => {
    return (
      <div key={post.id} className="card mb-3">
        <BlogPost post={post} />
        <div className="card-body my-0 py-1">
          <BlogCommentsByParentIdCell parentPostId={post.id} />
        </div>
      </div>
    )
  })
}
