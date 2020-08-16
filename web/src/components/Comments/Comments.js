import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CommentsList = ({ comments }) => {
  const { addMessage } = useFlash()
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () => {
      addMessage('Comment deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete comment ' + id + '?')) {
      deleteComment({ variables: { id }, refetchQueries: ['COMMENTS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
            <th>Created at</th>
            <th>Created by</th>
            <th>Parent post id</th>
            <th>Body</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{truncate(comment.id)}</td>
              <td>{truncate(comment.upvotes)}</td>
              <td>{truncate(comment.downvotes)}</td>
              <td>{timeTag(comment.createdAt)}</td>
              <td>{truncate(comment.createdBy)}</td>
              <td>{truncate(comment.parentPostId)}</td>
              <td>{truncate(comment.body)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.comment({ id: comment.id })}
                    title={'Show comment ' + comment.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editComment({ id: comment.id })}
                    title={'Edit comment ' + comment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete comment ' + comment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(comment.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CommentsList
