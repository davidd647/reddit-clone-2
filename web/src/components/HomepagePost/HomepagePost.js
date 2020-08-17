import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_POST = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const HomepagePost = () => {
  const { isAuthenticated, currentUser } = useAuth()
  const formMethods = useForm()

  const [create, { loading }] = useMutation(CREATE_POST, {
    onCompleted: () => {
      formMethods.reset()
      alert('Thank you for your message')
      location.reload()
    },
  })

  const onSubmit = (data) => {
    data.createdBy = currentUser.email
    data.upvotes = 0
    data.downvotes = 0

    create({ variables: { input: data } })
  }

  return (
    <>
      {isAuthenticated ? (
        <Form
          onSubmit={onSubmit}
          formMethods={formMethods}
          className="card p-2"
        >
          <div className="d-flex justify-content-between">
            <div className="w-100">
              <Label name="title" className="mt-0">
                Post Title:
              </Label>
              <TextField name="title" className="w-100" />
            </div>
          </div>
          <Label name="body">Post Content:</Label>

          <TextAreaField name="body" className="mb-3" />

          <div className="d-flex justify-content-between">
            <Submit disabled={loading}>Post</Submit>
            <span>Posting as: {currentUser.email}</span>
          </div>
        </Form>
      ) : null}
    </>
  )
}

export default HomepagePost
