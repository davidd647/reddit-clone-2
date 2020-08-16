export const schema = gql`
  type Post {
    id: Int!
    upvotes: Int!
    downvotes: Int!
    createdAt: DateTime!
    createdBy: String!
    title: String!
    body: String!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    upvotes: Int!
    downvotes: Int!
    createdBy: String!
    title: String!
    body: String!
  }

  input UpdatePostInput {
    upvotes: Int
    downvotes: Int
    createdBy: String
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
