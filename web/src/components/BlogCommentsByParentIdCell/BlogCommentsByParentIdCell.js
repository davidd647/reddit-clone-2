import { FaSortUp, FaSortDown } from 'react-icons/fa'

export const QUERY = gql`
  query($parentPostId: Int!) {
    parentPostIds(parentPostId: $parentPostId) {
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

export const Success = ({ parentPostIds }) => {
  const upVote = () => {
    console.log('upvote here')
  }

  const downVote = () => {
    console.log('downvote here')
  }

  parentPostIds.sort((a, b) => {
    return b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  })

  return parentPostIds.map((parentPostId) => {
    return (
      <div
        key={'comment' + parentPostId.id}
        className="d-flex align-items-center py-3"
      >
        <span className="pr-1">
          {parentPostId.upvotes - parentPostId.downvotes}
        </span>
        <div className="d-flex flex-column align-items-center px-1">
          <FaSortUp onClick={upVote} />
          <FaSortDown onClick={downVote} />
        </div>
        {parentPostId.body}
      </div>
    )
  })
  // return JSON.stringify(parentPostIds)
  // return parentPostIds.map((parentPostId) => {
  //   return <BlogCommentCell key={parentPostId.id} id={parentPostId.id} />
  // })
}

// query($id: Int!) {
//   comment(id: $id) {

//   export const QUERY = gql`
//   query {
//     comments {
//       id
//     }
//   }
// `

// export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

// export const Failure = ({ error }) => <div>Error: {error.message}</div>

// export const Success = ({ comments }) => {
//   return JSON.stringify(comments)
// }
