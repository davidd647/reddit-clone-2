export const schema = gql`
  type Comment {
    id: Int!
    upvotes: Int!
    downvotes: Int!
    createdAt: DateTime!
    createdBy: String!
    parentPostId: Int!
    body: String!
  }

  type Query {
    parentPostIds(id: Int!): [Comment!]!
    comments: [Comment!]!
    comment(id: Int!): Comment!
  }

  input CreateCommentInput {
    upvotes: Int!
    downvotes: Int!
    createdBy: String!
    parentPostId: Int!
    body: String!
  }

  input UpdateCommentInput {
    upvotes: Int
    downvotes: Int
    createdBy: String
    parentPostId: Int
    body: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    updateComment(id: Int!, input: UpdateCommentInput!): Comment!
    deleteComment(id: Int!): Comment!
  }
`
