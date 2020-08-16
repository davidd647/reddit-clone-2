import BlogComment from 'src/components/BlogComment'
export const QUERY = gql`
  query($id: Int!) {
    comment(id: $id) {
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

export const Success = ({ comment }) => {
  return <BlogComment comment={comment} />
}
