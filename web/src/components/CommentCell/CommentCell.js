import Comment from 'src/components/Comment'

export const QUERY = gql`
  query FIND_COMMENT_BY_ID($id: Int!) {
    comment: comment(id: $id) {
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

export const Empty = () => <div>Comment not found</div>

export const Success = ({ comment }) => {
  return <Comment comment={comment} />
}
