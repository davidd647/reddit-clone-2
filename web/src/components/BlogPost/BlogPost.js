import { Link, routes } from '@redwoodjs/router'
import { format, parseISO } from 'date-fns'
import { FaSortUp, FaSortDown } from 'react-icons/fa'

const BlogPost = ({ post }) => {
  const upVote = () => {
    console.log('upvote here')
  }

  const downVote = () => {
    console.log('downvote here')
  }

  return (
    <div key={post.id}>
      <div className="card-body pb-3">
        <span className="d-flex flex-row justify-content-between">
          <span>
            <FaSortUp onClick={upVote} />
            <FaSortDown onClick={downVote} />
            <span className="pr-1">{post.upvotes - post.downvotes}</span>
            <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
          </span>
          <span>
            Posted by: {post.createdBy} on{' '}
            {format(parseISO(post.createdAt), 'MM/dd/yyyy')}
          </span>
        </span>
        <div className="text-nowrap">{post.body}</div>
        <hr className="mb-0" />
      </div>
    </div>
  )
}

export default BlogPost
