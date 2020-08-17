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
        <span className="d-flex flex-row justify-content-between align-items-center">
          <span className="d-flex align-items-center">
            <span>{post.upvotes - post.downvotes}</span>
            <div className="d-inline-block">
              <div className="d-flex flex-column align-items-center px-1">
                <FaSortUp onClick={upVote} />
                <FaSortDown onClick={downVote} />
              </div>
            </div>
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

// trying to get the upvotes/downvotes to work:

// import { Link, routes } from '@redwoodjs/router'
// import { format, parseISO } from 'date-fns'
// import { FaSortUp, FaSortDown } from 'react-icons/fa'
// import { useMutation } from '@redwoodjs/web'

// export const UPDATE_POST = gql`
//   mutation($id: Int!, $input: UpdatePostInput!) {
//     updatePost(id: $id, input: $input) {
//       id
//     }
//   }
// `

// const BlogPost = ({ post }) => {
//   const [updatePost] = useMutation(UPDATE_POST)

//   const upVote = () => {
//     console.log('upvote here')

//     post.upvotes++
//     console.log(post.id)
//     console.log(post)
//     updatePost({ variables: { id: post.id, input: post } })
//   }

//   const downVote = () => {
//     console.log('downvote here')
//   }

//   return (
//     <div key={post.id}>
//       <div className="card-body pb-3">
//         <span className="d-flex flex-row justify-content-between align-items-center">
//           <span className="d-flex align-items-center">
//             <span>{post.upvotes - post.downvotes}</span>
//             <div className="d-inline-block">
//               <div className="d-flex flex-column align-items-center px-1">
//                 <FaSortUp onClick={upVote} />
//                 <FaSortDown onClick={downVote} />
//               </div>
//             </div>
//             <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
//           </span>
//           <span>
//             Posted by: {post.createdBy} on{' '}
//             {format(parseISO(post.createdAt), 'MM/dd/yyyy')}
//           </span>
//         </span>
//         <div className="text-nowrap">{post.body}</div>
//         <hr className="mb-0" />
//       </div>
//     </div>
//   )
// }

// export default BlogPost
