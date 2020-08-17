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
  return parentPostIds.map((parentPostId) => {
    return (
      <p key={'comment' + parentPostId.id}>
        <span className="pr-1">
          {parentPostId.upvotes - parentPostId.downvotes}
        </span>
        {parentPostId.body}
      </p>
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
