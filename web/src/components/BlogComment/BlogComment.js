import { Link, routes } from '@redwoodjs/router'

const BlogComment = ({ comment }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>
        <Link to={routes.blogComment({ id: comment.id })}>Link</Link>
      </p>
      <p>id: {comment.id}</p>
      <p>createdBy: {comment.createdBy}</p>
      <p>parentPostId: {comment.parentPostId}</p>
      <p>body: {comment.body}</p>
    </div>
  )
}

export default BlogComment
