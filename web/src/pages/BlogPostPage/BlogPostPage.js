import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'
import BlogCommentsByParentIdCell from 'src/components/BlogCommentsByParentIdCell'
import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextAreaField, Submit, useMutation } from '@redwoodjs/web'

const CREATE_COMMENT = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const BlogPostPage = ({ id }) => {
  const { isAuthenticated, currentUser } = useAuth()

  // this line breaks the page... ⬇️... why?
  const [create] = useMutation(CREATE_COMMENT)

  const onSubmit = (data) => {
    data.createdBy = currentUser.email
    data.parentPostId = id
    data.upvotes = 0
    data.downvotes = 0
    console.log(data)
    create({ variables: { input: data } })
  }

  return (
    <BlogLayout>
      <BlogPostCell id={id} />

      {isAuthenticated ? (
        <Form onSubmit={onSubmit} className="card p-2">
          <Label name="title" className="mt-0">
            Comment Content:
          </Label>
          <TextAreaField name="body" className="mb-3" />
          <div className="d-flex justify-content-between">
            <Submit>Post</Submit>
            <span>Posting comment as: {currentUser.email}</span>
          </div>

          <hr />
        </Form>
      ) : null}

      <BlogCommentsByParentIdCell parentPostId={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
