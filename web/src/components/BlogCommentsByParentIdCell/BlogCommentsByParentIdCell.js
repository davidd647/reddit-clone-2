export const QUERY = gql`
  query {
    parentPostIds {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ comments }) => {
  return JSON.stringify(comments)
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
