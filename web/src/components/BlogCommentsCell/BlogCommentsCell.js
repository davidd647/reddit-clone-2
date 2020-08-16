import BlogComment from 'src/components/BlogComment'

export const QUERY = gql`
  query BlogCommentsQuery {
    comments {
      id
      upvotes
      downvotes
      createdAt
      createdBy
      parentPostId
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ comments }) => {
  return comments.map((comment) => {
    return <BlogComment key={comment.id} comment={comment} />
  })
}
