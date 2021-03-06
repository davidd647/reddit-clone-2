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
  const [create] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      // formMethods.reset()
      alert('Thank you for your message')
      location.reload()
    },
  })

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
        <Form onSubmit={onSubmit} className="card p-2 mb-3">
          <Label name="title" className="mt-0">
            Add a Comment:
          </Label>
          <TextAreaField name="body" className="mb-3" />
          <div className="d-flex justify-content-between">
            <Submit>Post</Submit>
            <span>Posting comment as: {currentUser.email}</span>
          </div>
        </Form>
      ) : null}

      <span>Comments:</span>
      <BlogCommentsByParentIdCell parentPostId={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
