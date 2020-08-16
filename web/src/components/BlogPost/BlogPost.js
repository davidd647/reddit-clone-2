import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <div
      key={post.id}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <p>id: {post.id}</p>
      <p>createdBy: {post.createdBy}</p>
      <p>
        <Link to={routes.blogPost({ id: post.id })}>title: {post.title}</Link>
      </p>
      <p>body: {post.body}</p>
    </div>
  )
}

export default BlogPost
